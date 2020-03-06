import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-create-index',
  templateUrl: './create-index.component.html',
  styleUrls: ['./create-index.component.scss']
})

export class CreateIndexComponent implements OnInit {

  markdown: string = '';
  private unsubscribe$ = new Subject<void>();

  constructor(private creator: CreatorService,
              private store: Store<AppState>,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.checkDraftLoader();
  }

  public change(value: string): void {
    this.creator.makeChange(value);
  }

  private checkDraftLoader(): void {
    this.activatedRoute.paramMap
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap(() => {
        return window.history.state.loadDraft ?
        this.store.select(fromArticles.getArticlesDrafts) :
        of(null)
      }))
      .subscribe((res: Article) => {
        if (res) {
          this.markdown = res.message;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
