import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { APP_CONSTANTS } from '@app/app.config';
import { environment } from '@environments/environment';
import { CustomError } from '@shared/interfaces/interfaces';
import { StorageService } from '@core/storage/storage.service';

@Injectable()

export class ErrorService {

  readonly API_ERRORS = APP_CONSTANTS.END_POINT + 'errors/';

  constructor(private http: HttpService,
              private ls: StorageService) {
      if (!environment.production) { console.log('HttpErrorService'); }
  }

  saveError(err: Error | HttpErrorResponse): void {
    const error = this.manageError(err);
    this.http.post(this.API_ERRORS, error).toPromise().then();
  }

  private manageError(err: Error | HttpErrorResponse): CustomError {
    if (err instanceof HttpErrorResponse) {
      return new CustomError(
        err.name,
        err.error.message || 'Error',
        err.statusText,
        this.ls.get('user') || null,
        err.status,
        err.url,
        APP_CONSTANTS.PLATFORM
      );
    } else {
      return new CustomError(
        err.name,
        err.message || 'Error',
        err.stack,
        this.ls.get('user') || null,
        null,
        null,
        APP_CONSTANTS.PLATFORM
      );
    }
  }

}
