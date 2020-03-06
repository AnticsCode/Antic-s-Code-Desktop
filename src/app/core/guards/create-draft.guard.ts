import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import { takeUntil, map } from 'rxjs/operators';
import { Article } from '@app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateDraftGuard implements CanActivate {

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  canActivate(): Observable<boolean> {
    console.log('guard')
    return this.store.select(fromArticles.getArticlesDrafts)
            .pipe(
            takeUntil(this.unsubscribe$),
            map((res: Article) => {
              console.log(res);
              return res ? true : false
            })
          )
  }

}
