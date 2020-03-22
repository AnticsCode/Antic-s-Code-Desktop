import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { ArticlesService } from '@core/services/services.index';
import { Article, ArticleResponse } from '@shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-article-only',
  templateUrl: './article-only.component.html',
  styleUrls: ['./article-only.component.scss']
})
export class ArticleOnlyComponent implements OnInit, OnDestroy {

  article: Article;
  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
              private _article: ArticlesService) { }

  ngOnInit() {
    this.getArticleBySlug();
   }

  private getArticleBySlug(): void {
    this.activatedRoute.paramMap
    .pipe(switchMap((res: ParamMap) => {
        const slug = res.get('slug');
        if (!slug) { return of(null) }
        return this._article.getArticleBySlug(slug);
    }), takeUntil(this.unsubscribe$))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.article = res.articles[0];
       }
    } , (err: HttpErrorResponse) => console.log(err));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
