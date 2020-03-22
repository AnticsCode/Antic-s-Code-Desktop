import { createReducer, on, Action } from '@ngrx/store';

import * as DraftActions from '../actions/draft.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface DraftState {
  draft: Article;
  draftLoaded: boolean;
  previewArticle: Article;
  previewArticleLoaded: boolean;
  error: string;
  showDraftDialog: boolean;
}

export const inititalState: DraftState = {
  draft: null,
  draftLoaded: false,
  previewArticle: null,
  previewArticleLoaded: false,
  error: null,
  showDraftDialog: false
};

const featureReducer = createReducer(
  inititalState,
  // GET DRAFT
  on(DraftActions.getDraft, state => (
    { ...state, draftLoaded: false, error: null }
  )),
  on(DraftActions.getDraftSuccess, (state, {draft}) => (
    {
      ...state,
      draftLoaded: true,
      error: null,
      draft
    }
  )),
  on(DraftActions.getDraftFailure, (state, { error }) => (
    { ...state, draftLoaded: false, error }
  )),
  // GET PREVIEW ARTICLE
  on(DraftActions.getPreviewArticle, state => (
    { ...state, previewArticleLoaded: false, error: null }
  )),
  on(DraftActions.getPreviewArticleSuccess, (state, {article}) => (
    {
      ...state,
      previewArticleLoaded: true,
      error: null,
      previewArticle: article
    }
  )),
  on(DraftActions.getPreviewArticleFailure, (state, { error }) => (
    { ...state, previewArticleLoaded: false, error }
  )),
  // SAVE DRAFT
  on(DraftActions.saveDraft, (state, { draft }) => (
    { ...state, error: null, draft: null }
  )),
  on(DraftActions.saveDraftSuccess, (state, { draft }) => (
    {
      ...state,
      draftLoaded: true,
      error: null,
      draft
    }
  )),
  on(DraftActions.saveDraftFailure, (state, { error }) => (
    { ...state, draftLoaded: false, error }
  )),
  // SAVE PREVIEW ARTICLE
  on(DraftActions.savePreviewArticle, (state, { article }) => (
    { ...state, error: null, previewArticle: null }
  )),
  on(DraftActions.savePreviewArticleSuccess, (state, { article }) => (
    {
      ...state,
      previewArticleLoaded: true,
      error: null,
      previewArticle: article
    }
  )),
  on(DraftActions.savePreviewArticleFailure, (state, { error }) => (
    { ...state, previewArticleLoaded: false, error }
  )),
   // SHOW DRAFT DIALOG
   on(DraftActions.showDraftDialog, (state, { show }) => (
    { ...state, error: null }
  )),
  on(DraftActions.showDraftDialogSuccess, (state, { show }) => (
    {
      ...state,
      error: null,
      showDraftDialog: show
    }
  )),
  on(DraftActions.showDraftDialogFailure, (state, { error }) => (
    { ...state, draftLoaded: false, error }
  )),
  // REMOVE DRAFT
  on(DraftActions.removeDraft, state => (
    {
      ...state,
      draftLoaded: false,
      showDraftDialog: false,
      previewArticle: null,
      previewArticleLoaded: false,
      error: null,
      draft: null
    }
  ))
);

export function reducer(state: DraftState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getDraft = (state: DraftState) => state.draft;
export const getPreviewArticle = (state: DraftState) => state.previewArticle;
export const getPreviewArticleLoaded = (state: DraftState) => state.previewArticleLoaded;
export const getDraftLoaded = (state: DraftState) => state.draftLoaded;
export const getShowDraftSnack = (state: DraftState) => state.showDraftDialog;
