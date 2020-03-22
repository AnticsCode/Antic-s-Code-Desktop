import { Injectable } from '@angular/core';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../../storage/storage.service';
import { ErrorService } from '../error/error.service';
import { CrafterService } from '@app/core/services/services.index';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: Store<AppState>,
              private ls: StorageService,
              private errorService: ErrorService,
              private crafter: CrafterService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(((res: HttpResponse<any>) => {
    }), ((error: HttpErrorResponse) => {
        if (error.status === 0) { return; }
        this.errorService.saveError(error);
        if (error.status === 401) {
          this.crafter.toaster('Token caducado', `No se pudo completar la operación.
                                                  Hemos actualizado el Token`, 'info');
          const id = this.ls.get('user');
          if (!id) { return throwError(error); }
          this.store.dispatch(UserActions.refreshToken({id}));
      } else { return throwError(error); }
    })));
  }
}
