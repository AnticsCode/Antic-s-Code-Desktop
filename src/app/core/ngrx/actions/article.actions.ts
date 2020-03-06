import { props, createAction } from '@ngrx/store';
import { Article } from '@app/shared/interfaces/interfaces';

// GET DRAFTS
export const getArticlesDraft =
  createAction('[Articles API] Get Articles Draft');

export const getArticlesDraftSuccess =
  createAction('[Articles API] Get Articles Draft Success',
  props<{ draft: Article }>());

export const getArticlesDraftFailure =
  createAction('[Articles API] Get Articles Draft Failure',
  props<{ error: string }>());

// SHOW DRAFT DIALOG
export const showDraftDialog =
  createAction('[Articles API] Show Draft Dialog',
  props<{ show: boolean }>());

export const showDraftDialogSuccess =
  createAction('[Articles API] Show Draft Dialog Success',
  props<{ show: boolean }>());

export const showDraftDialogFailure =
  createAction('[Articles API] Show Draft Dialog Failure',
  props<{ error: string }>());

// SAVE DRAFT
export const saveArticleDraft =
  createAction('[Articles API] Save Article Draft',
  props<{ draft: Article }>());

export const saveArticleDraftSuccess =
  createAction('[Articles API] Save Article Draft Success',
  props<{ draft: Article }>());

export const saveArticleDraftFailure =
  createAction('[Articles API] Save Article Draft Failure',
  props<{ error: string }>());
