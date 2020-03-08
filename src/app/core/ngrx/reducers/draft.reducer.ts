import { createReducer, on, Action } from '@ngrx/store';

import * as DraftActions from '../actions/draft.actions';
import { Article } from '@app/shared/interfaces/interfaces';

export interface DraftState {
  draft: Article;
  draftLoaded: boolean;
  error: string;
  showDraftDialog: boolean;
}

export const inititalState: DraftState = {
  draft: null,
  draftLoaded: false,
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
  // SAVE DRAFT
  on(DraftActions.saveDraft, (state, { draft }) => (
    { ...state, error: null }
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
      error: null,
      draft: null
    }
  ))
);

export function reducer(state: DraftState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getDraft = (state: DraftState) => state.draft;
export const getDraftLoaded = (state: DraftState) => state.draftLoaded;
export const getShowDraftSnack = (state: DraftState) => state.showDraftDialog;
