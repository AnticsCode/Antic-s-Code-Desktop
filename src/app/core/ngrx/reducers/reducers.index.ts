import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from './article.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articles: fromArticles.reducer
};

export const getAppState = createFeatureSelector<AppState>('AppState');
