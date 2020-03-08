import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from './draft.reducer';

export const reducers: ActionReducerMap<AppState> = {
  drafts: fromDrafts.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');
