import { createReducer, on, Action } from '@ngrx/store';

import * as ArticleActions from '../actions/article.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface ArticleState {
  articlesDraft: Article;
  articlesDraftLoaded: boolean;
  error: string;
  showDraftDialog: boolean;
}

export const inititalState: ArticleState = {
  articlesDraft: null,
  articlesDraftLoaded: false,
  error: null,
  showDraftDialog: false
};

const featureReducer = createReducer(
  inititalState,
  // GET ARTICLES DRAFTS
  on(ArticleActions.getArticlesDraft, state => (
    { ...state, articlesDraftLoaded: false, error: null }
  )),
  on(ArticleActions.getArticlesDraftSuccess, (state, {draft}) => (
    {
      ...state,
      articlesDraftLoaded: true,
      error: null,
      articlesDraft: draft
    }
  )),
  on(ArticleActions.getArticlesDraftFailure, (state, { error }) => (
    { ...state, articlesDraftLoaded: false, error }
  )),
  // SAVE ARTICLE DRAFT
  on(ArticleActions.saveArticleDraft, (state, { draft }) => (
    { ...state, error: null }
  )),
  on(ArticleActions.saveArticleDraftSuccess, (state, { draft }) => (
    {
      ...state,
      articlesDraftLoaded: true,
      error: null,
      articlesDraft: draft
    }
  )),
  on(ArticleActions.saveArticleDraftFailure, (state, { error }) => (
    { ...state, articlesDraftLoaded: false, error }
  )),
   // SHOW DRAFT DIALOG
   on(ArticleActions.showDraftDialog, (state, { show }) => (
    { ...state, error: null }
  )),
  on(ArticleActions.showDraftDialogSuccess, (state, { show }) => (
    {
      ...state,
      error: null,
      showDraftDialog: show
    }
  )),
  on(ArticleActions.showDraftDialogFailure, (state, { error }) => (
    { ...state, articlesDraftLoaded: false, error }
  )),
);

export function reducer(state: ArticleState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getArticleDrafts = (state: ArticleState) => state.articlesDraft;
export const getArticleDraftsLoaded = (state: ArticleState) => state.articlesDraftLoaded;
export const getShowDraftSnack = (state: ArticleState) => state.showDraftDialog;
