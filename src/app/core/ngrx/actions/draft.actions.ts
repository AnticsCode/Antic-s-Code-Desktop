import { props, createAction } from '@ngrx/store';
import { Article } from '@app/shared/interfaces/interfaces';

// GET DRAFTS
export const getDraft =
  createAction('[Drafts API] Get Draft');

export const getDraftSuccess =
  createAction('[Drafts API] Get Draft Success',
  props<{ draft: Article }>());

export const getDraftFailure =
  createAction('[Drafts API] Get Draft Failure',
  props<{ error: string }>());

// SHOW DRAFT DIALOG
export const showDraftDialog =
  createAction('[Drafts API] Show Draft Dialog',
  props<{ show: boolean }>());

export const showDraftDialogSuccess =
  createAction('[Drafts API] Show Draft Dialog Success',
  props<{ show: boolean }>());

export const showDraftDialogFailure =
  createAction('[Drafts API] Show Draft Dialog Failure',
  props<{ error: string }>());

// SAVE DRAFT
export const saveDraft =
  createAction('[Drafts API] Save Draft',
  props<{ draft: Article }>());

export const saveDraftSuccess =
  createAction('[Drafts API] Save Draft Success',
  props<{ draft: Article }>());

export const saveDraftFailure =
  createAction('[Drafts API] Save Draft Failure',
  props<{ error: string }>());

// REMOVE DRAFT
export const removeDraft =
createAction('[Drafts API] Remove Draft');
