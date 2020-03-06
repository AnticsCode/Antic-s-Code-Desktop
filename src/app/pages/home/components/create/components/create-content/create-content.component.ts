import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';

import {
  debounceTime,
  distinctUntilChanged,
  exhaustMap,
  takeUntil,
  mergeMap }
from 'rxjs/operators';

import { of, Subject } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';

import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { ActivatedRoute } from '@angular/router';
import { DraftsService } from '@app/core/services/drafts/drafts.service';
import { ArticleResponse } from '../../../../../../shared/interfaces/interfaces';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent implements OnInit {

  preview: string;
  articleDraft: Article;
  private unsubscribe$ = new Subject<void>();
  loading = false;

  constructor(private creator: CreatorService,
              private store: Store<AppState>,
              public activatedRoute: ActivatedRoute,
              private _draft: DraftsService) { }

  ngOnInit() {
    this.checkData();
    this.getArticleDraft();
    this.initChanges();
    this.checkDraftLoader();
  }

  public initChanges(): void {
    this.creator.previewChange
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$),
      exhaustMap((res: string) => {
        this.loading = true;
        this.preview = res;
        return of(res)
      }))
      .pipe(
        debounceTime(20000),
        concatMap((res: string) => {
          return this._draft.updateDraftMessage(
            res,
            this.articleDraft._id
          )
        })
      ).subscribe((res: ArticleResponse) => {
        console.log(res);
        if (res.ok) {
          this.loading = false;
          this.store.dispatch(
            ArticleActions.saveArticleDraft({draft: this.articleDraft})
          );
        }
      });
  }

  private getArticleDraft(): void {
    this.store.select(fromArticles.getArticlesDrafts)
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: Article) => {
       if (res) {
         this.articleDraft = res;
       }
     })
  }

  private checkData(): void {
    this.store.select(fromArticles.getArticlesDraftsLoaded)
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(ArticleActions.getArticlesDraft());
       }
    });
  }

  private checkDraftLoader(): void {
    this.activatedRoute.paramMap
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      if (window.history.state.loadDraft) {
        this.preview = this.articleDraft.message;
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.showDraftDialog({show:true}));
  }

}
