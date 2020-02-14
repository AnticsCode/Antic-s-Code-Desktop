import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

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

  constructor(private errorService: ErrorService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap(((res: HttpResponse<any>) => {
    }), ((error: HttpErrorResponse) => {
        if (error.status === 0) { return; }
        this.errorService.saveError(error);
        if (error.status === 401) {
          console.log('Unauthorized');
      } else { return throwError(error); }
    })));
  }
}
