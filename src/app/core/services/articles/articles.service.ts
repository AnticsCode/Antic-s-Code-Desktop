import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { environment } from '@environments/environment';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Injectable()

export class ArticlesService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles/';
  public page = 0;

  constructor(private http: HttpService) {
      if (!environment.production) { console.log('ArticlesService'); }
  }

  public getArticles(limit?: number): Observable<ArticleResponse> {
    this.page++;
    return this.http.get(this.API_ARTICLES + '?page=' + this.page + '&limit=' + limit);
  }

  public getArticlesByUser(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'user');
  }

  public getArticleBySlug(slug: string): Observable<ArticleResponse> {
    return this.http.get(APP_CONSTANTS.END_POINT + 'article/' + slug);
  }

  public getArticlesList(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'list');
  }

  public createArticle(article: Article): Observable<ArticleResponse> {
    return this.http.post(this.API_ARTICLES, article);
  }

  public resetPage(): void {
    this.page = 0;
  }

}
