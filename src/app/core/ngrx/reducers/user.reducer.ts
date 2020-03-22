import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '@app/shared/interfaces/interfaces';

export interface UserState {
  user: User;
  loaded: boolean;
  error: string;
}

export const inititalState: UserState = {
  user: null,
  loaded: false,
  error: null
};

const featureReducer = createReducer(
  inititalState,
  // VERIFY TOKEN
  on(UserActions.verifyToken, (state) => (
    {
      ...state,
      loaded: false,
      error: null
    }
  )),
  on(UserActions.verifyTokenSuccess, (state, { user }) => (
    {
      ...state,
      loaded: true,
      error: null,
      user
    }
  )),
  on(UserActions.verifyTokenFailure, (state, { error }) => (
    { ...state, loaded: false, error, user: null }
  )),
  // REFRESH TOKEN
  on(UserActions.refreshToken, (state, { id }) => (
    {
      ...state,
      loaded: false,
      error: null
    }
  )),
  on(UserActions.refreshTokenSuccess, (state, { user }) => (
    {
      ...state,
      loaded: true,
      error: null,
      user
    }
  )),
  on(UserActions.refreshTokenFailure, (state, { error }) => (
    { ...state, loaded: false, error, user: null }
  ))
);

export function reducer(state: UserState | undefined, action: Action) {
  return featureReducer(state, action);
}
