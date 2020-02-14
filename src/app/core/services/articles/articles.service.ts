import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { environment } from '@environments/environment';
import { ArticleResponse } from '@app/shared/interfaces/interfaces';

@Injectable()

export class ArticlesService {

  readonly API_ARTICLES = APP_CONSTANTS.END_POINT + 'articles/user';

  constructor(private http: HttpService) {
      if (!environment.production) { console.log('ArticlesService'); }
  }

  public getArticlesByUser(): Observable<ArticleResponse> {
    return this.http.get(this.API_ARTICLES + 'user');
  }

}
