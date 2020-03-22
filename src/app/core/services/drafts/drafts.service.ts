import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { APP_CONSTANTS } from '@app/app.config';
import { environment } from '@environments/environment';
import { ArticleResponse, Article } from '@app/shared/interfaces/interfaces';

@Injectable()

export class DraftsService {

  readonly API_DRAFTS = APP_CONSTANTS.END_POINT + 'drafts/';

  constructor(private http: HttpService) {
      if (!environment.production) { console.log('DraftsService'); }
  }

  public getDrafts(): Observable<ArticleResponse> {
    return this.http.get(this.API_DRAFTS);
  }

  public getDraftsByUser(sort: string = 'any'): Observable<ArticleResponse> {
    return this.http.get(this.API_DRAFTS + 'user' + '?sort=' + sort);
  }

  public getDraftBySlug(slug: string): Observable<ArticleResponse> {
    return this.http.get(this.API_DRAFTS + slug);
  }

  public createDraft(draft: Article): Observable<ArticleResponse> {
    return this.http.post(this.API_DRAFTS, draft);
  }

  public updateDraft(draft: Article): Observable<ArticleResponse> {
    return this.http.put(this.API_DRAFTS, draft);
  }

  public updateDraftMessage(message: string, id: string): Observable<ArticleResponse> {
    return this.http.put(this.API_DRAFTS + 'message/' + id, {message});
  }

  public publishDraft(draft: Article): Observable<ArticleResponse> {
    return this.http.post(this.API_DRAFTS + 'publish', draft);
  }

  public unPublishDraft(draft: Article): Observable<ArticleResponse> {
    return this.http.post(this.API_DRAFTS + 'unpublish', draft);
  }

}
