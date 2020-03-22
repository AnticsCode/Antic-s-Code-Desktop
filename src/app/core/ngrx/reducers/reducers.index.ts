import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from './draft.reducer';
import * as fromUsers from './user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  drafts: fromDrafts.reducer,
  user: fromUsers.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');
