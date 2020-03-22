import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, CheckStatus } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil } from 'rxjs/operators';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import { CHECKSTATUS } from '@app/shared/shared.data';

@Component({
  selector: 'app-single-article-index',
  templateUrl: './single-article-index.component.html',
  styleUrls: ['./single-article-index.component.scss']
})

export class SingleArticleIndexComponent implements OnInit, OnDestroy {

  check: CheckStatus[];
  status = CHECKSTATUS;
  private unsubscribe$ = new Subject<void>();
  progress: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getSingleArticle();
  }

  private getSingleArticle(): void {
    this.store.select(fromDrafts.getDraft)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: Article) => {
      if (res && res.check) {
        this.check = Object.values(res.check);
        this.calculateValue();
      }
    });
  }

  private calculateValue(): void {
    let total = 0;
    this.check.forEach((c: CheckStatus) => {
      if (c.ok) {
        total++;
      }
    });
    this.progress = Math.round((total / this.check.length) * 100);

    if (this.check.length !== this.status.length) {
      console.warn('Warning, make sure `check` and `status` have the same length.');
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
