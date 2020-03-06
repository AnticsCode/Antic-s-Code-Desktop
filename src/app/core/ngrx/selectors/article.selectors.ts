import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '../reducers/article.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getArticlesState = createSelector(
  getAppState,
  (state: AppState) => state.articles
);

export const getArticlesDrafts = createSelector(
  getArticlesState, fromArticles.getArticleDrafts
);

export const getArticlesDraftsLoaded = createSelector(
  getArticlesState, fromArticles.getArticleDraftsLoaded
);

export const getShowDraftSnack = createSelector(
  getArticlesState, fromArticles.getShowDraftSnack
);
