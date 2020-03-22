import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromArticles from '@app/core/ngrx/selectors/draft.selectors';
import { Subject, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, switchMap } from 'rxjs/operators';
import { LoadDraftComponent } from '@app/shared/components/layout/dialogs/load-draft/load-draft.component';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';
import { DraftsService } from '@app/core/services/services.index';
import { ArticleResponse } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})

export class CreateFormComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>,
              private dialogService: NbDialogService,
              private router: Router,
              private _draft: DraftsService) { }

  ngOnInit() {
    this.checkUserDraft();
    this.checkDraftDialog();
  }

  private checkUserDraft(): void {
    this._draft.getDraftsByUser('Draft')
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: ArticleResponse) => {
       if (res.ok) {
        this.store.dispatch(DraftActions.saveDraft({draft: res.drafts[0]}));
        this.store.dispatch(DraftActions.showDraftDialog({show: true}));
       }
     });
  }

  private checkDraftDialog(): void {
    this.store.select(fromArticles.getShowDraftSnack)
    .pipe(
      takeUntil(this.unsubscribe$),
      switchMap((res: boolean) => {
        if (res) {
          const dialogRef = this.dialogService.open(LoadDraftComponent);
          return dialogRef.onClose;
        } else { return of(null); }
     }))
     .subscribe((res: boolean) => {
      if (res) {
        this.router.navigateByUrl('/home/create');
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
