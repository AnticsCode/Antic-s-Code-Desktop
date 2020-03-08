import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/core/storage/storage.service';
import { NbThemeService } from '@nebular/theme';
import { DraftsService } from '@app/core/services/drafts/drafts.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';
import { takeUntil } from 'rxjs/operators';
import { ArticleResponse } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  constructor(private ls: StorageService,
              private _theme: NbThemeService,
              private store: Store<AppState>,
              private _draft: DraftsService) { }

  ngOnInit() {
    this.checkTheme();
    this.checkUserDraft();
  }

  private checkTheme(): void {
    const t = this.ls.get('theme');
    if (t) {
      setTimeout(() => {
        this._theme.changeTheme(t);
      }, 100);
    }
  }

  private checkUserDraft(): void {
    this._draft.getDraftsByUser()
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: ArticleResponse) => {
       if (res.ok) {
        this.store.dispatch(DraftActions.saveDraft({draft: res.draft}));
        this.store.dispatch(DraftActions.showDraftDialog({show: true}));
       }
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
