import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { User, UserResponse } from '@shared/interfaces/interfaces';
import { StorageService } from '@core/storage/storage.service';
import { environment } from '@environments/environment';

@Injectable()

export class UserService {

  readonly API_USERS = APP_CONSTANTS.END_POINT + 'users';
  readonly API_TOKEN = APP_CONSTANTS.END_POINT + 'token';
  private user: User;

  constructor(private http: HttpService,
              private ls: StorageService) {
      if (!environment.production) { console.log('UserService'); }
  }

  public getUser(): User {
    return this.user || null;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  public getUserById(id: string): Observable<UserResponse> {
    return this.http.get(this.API_USERS + `/${id}`);
  }

  public refreshToken(id: string): Observable<UserResponse> {
    return this.http.post(this.API_TOKEN + `/${id}`, null);
  }

  public verifyToken(): Observable<UserResponse> {
    if (!this.ls.get('token')) { return of(null); }
    return this.http.get(this.API_TOKEN)
      .pipe(map((res: UserResponse) => {
        if (res.ok) {
          this.user = res.user;
          return res;
        } else { this.logout(); }
    }));
  }

  public logout(): void {
    this.ls.setKey('token', null);
    this.user = null;
    document.body.removeAttribute('class'); // Remove Theme
    document.body.removeAttribute('style');
  }

}


