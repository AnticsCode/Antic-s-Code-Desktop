import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { concatMap, catchError } from 'rxjs/operators';
import * as DraftActions from '../actions/draft.actions';

@Injectable()

export class DraftEffects {
  constructor(private actions: Actions) { }

  // SAVE ARTICLE DRAFT
  setArticleDraft$ = createEffect(() => this.actions
  .pipe(
    ofType(DraftActions.saveDraft),
    concatMap((action) =>
        of(DraftActions.saveDraftSuccess({draft: action.draft}))),
        catchError(error =>
            of(DraftActions.saveDraftFailure({ error: error.message }))
      )
    )
  );

  // SAVE PREVIEW ARTICLE
  setPreviewArticle$ = createEffect(() => this.actions
  .pipe(
    ofType(DraftActions.savePreviewArticle),
    concatMap((action) =>
        of(DraftActions.savePreviewArticleSuccess({article: action.article}))),
        catchError(error =>
            of(DraftActions.savePreviewArticleFailure({ error: error.message }))
      )
    )
  );

  // SHOW DRAFT DIALOG
  showDraftDialog$ = createEffect(() => this.actions
  .pipe(
    ofType(DraftActions.showDraftDialog),
    concatMap((action) =>
        of(DraftActions.showDraftDialogSuccess({show: action.show}))),
        catchError(error =>
            of(DraftActions.showDraftDialogFailure({ error: error.message }))
      )
    )
  );
}
