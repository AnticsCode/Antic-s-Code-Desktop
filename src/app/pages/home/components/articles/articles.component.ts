import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesService } from '@core/services/articles/articles.service';
import { Article } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleResponse } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>

  constructor(private _article: ArticlesService) { }

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    return this._article.getArticlesList()
     .pipe(map((res: ArticleResponse) => {
       if (res.ok) { return res.articles; }
     }));
  }

  ngOnDestroy() {
    this._article.resetPage();
  }

}
