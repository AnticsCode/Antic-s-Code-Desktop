import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/interfaces/interfaces';

// VERIFY TOKEN
export const verifyToken =
  createAction('[Users] Verify Token');

export const verifyTokenSuccess =
  createAction('[Users] Verify Token Success',
  props<{ user: User }>());

export const verifyTokenFailure =
  createAction('[Users] Verify Token Failure',
  props<{ error: string }>());

// REFRESH TOKEN
export const refreshToken =
  createAction('[Users] Refresh Token',
  props<{ id: string }>());

export const refreshTokenSuccess =
  createAction('[Users] Refresh Token Success',
  props<{ user: User }>());

export const refreshTokenFailure =
  createAction('[Users] Refresh Token Failure',
  props<{ error: string }>());
