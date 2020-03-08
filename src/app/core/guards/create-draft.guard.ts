import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import { map } from 'rxjs/operators';
import { Article } from '@app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class CreateDraftGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(): Observable<boolean> {
    return this.store.select(fromDrafts.getDraft)
            .pipe(
            map((res: Article) => {
              return res ? true : false
            })
          )
  }

}
