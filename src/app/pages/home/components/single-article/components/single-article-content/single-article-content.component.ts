import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';

@Component({
  selector: 'app-single-article-content',
  templateUrl: './single-article-content.component.html',
  styleUrls: ['./single-article-content.component.scss']
})

export class SingleArticleContentComponent implements OnInit, OnDestroy {

  draft: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getSingleArticle();
  }

  private getSingleArticle(): void {
    this.store.select(fromDrafts.getDraft)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: Article) => {
      if (res) {
        this.draft = res;
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
