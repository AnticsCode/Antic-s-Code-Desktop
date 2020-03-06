import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import * as ArticleActions from './../actions/article.actions';

@Injectable()

export class ArticleEffects {
  constructor(private actions: Actions) { }

  // SAVE ARTICLE DRAFT
  setArticleDraft$ = createEffect(() => this.actions
  .pipe(
    ofType(ArticleActions.saveArticleDraft),
    concatMap((action) =>
        of(ArticleActions.saveArticleDraftSuccess({draft: action.draft}))),
        catchError(error =>
            of(ArticleActions.saveArticleDraftFailure({ error: error.message }))
      )
    )
  );

  // SAVE ARTICLE DRAFT
  showDraftDialog$ = createEffect(() => this.actions
  .pipe(
    ofType(ArticleActions.showDraftDialog),
    concatMap((action) =>
        of(ArticleActions.showDraftDialogSuccess({show: action.show}))),
        catchError(error =>
            of(ArticleActions.showDraftDialogFailure({ error: error.message }))
      )
    )
  );
}
