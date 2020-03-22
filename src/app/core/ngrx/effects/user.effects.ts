import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as UserActions from '../actions/user.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/services.index';
import { StorageService } from '@app/core/storage/storage.service';
import { UserResponse } from '@shared/interfaces/interfaces';
import { Router } from '@angular/router';

@Injectable()

export class UserEffects {
  constructor(private actions: Actions,
              private user: UserService,
              private ls: StorageService,
              private router: Router) { }

  // VERIFY TOKEN
  verifyTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.verifyToken),
      concatMap(() =>
      this.user.verifyToken()
        .pipe(
          map((res: UserResponse) => {
            if (res.ok) {
              this.user.setUser(res.user);
              this.router.navigateByUrl('/home');
              return UserActions.verifyTokenSuccess({user: res.user});
            }
          }),
          catchError(error =>
              of(UserActions.verifyTokenFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // REFRESH TOKEN
  refreshTokenEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(UserActions.refreshToken),
      concatMap((action) =>
      this.user.refreshToken(action.id)
        .pipe(
          map((res: UserResponse) => {
            if (res.ok) {
              this.ls.setKey('token', res.token);
              this.user.setUser(res.user);
              this.router.navigateByUrl('/home');
              return UserActions.refreshTokenSuccess({ user: res.user });
            }
          }),
          catchError(error =>
              of(UserActions.refreshTokenFailure({ error: error.message }))
          )
        )
      )
    )
  );

}
