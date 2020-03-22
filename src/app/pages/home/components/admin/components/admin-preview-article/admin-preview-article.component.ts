import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import { takeUntil } from 'rxjs/operators';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-preview-article',
  templateUrl: './admin-preview-article.component.html',
  styleUrls: ['./admin-preview-article.component.scss']
})

export class AdminPreviewArticleComponent implements OnInit, OnDestroy {

  draft: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>,
              private location: Location) { }

  ngOnInit() {
    this.getDraft();
  }

  private getDraft(): void {
    this.store.select(fromDrafts.getPreviewArticle)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: Article) => {
      if (res) {
        this.draft = res;
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
