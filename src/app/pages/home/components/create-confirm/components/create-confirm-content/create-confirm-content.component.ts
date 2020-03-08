import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { DraftsService } from '@app/core/services/drafts/drafts.service';

@Component({
  selector: 'app-create-confirm-content',
  templateUrl: './create-confirm-content.component.html',
  styleUrls: ['./create-confirm-content.component.scss']
})

export class CreateConfirmContentComponent implements OnInit, OnDestroy {

  draft: Article;
  inputs: number[] = [0, 1];
  name: string[] = ['', null];
  link: string[] = ['', null];
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>,
              private router: Router,
              private crafter: CrafterService,
              private _draft: DraftsService) { }

  ngOnInit() {
    this.getArticleDraft();
  }

  private getArticleDraft(): void {
    this.store.select(fromDrafts.getDraft)
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: Article) => {
       if (res) {
         this.draft = res;
       }
     })
  }

  addLink(): void {
    if (this.inputs.length >= 2 || this.inputs.length < 1) { return; }
    this.inputs.push(this.inputs.length);
  }

  removeLink(): void {
    this.inputs.splice(this.inputs.length -1, 1);
    this.name[1] = null;
    this.link[1] = null
  }

  submit(): void {
    this.insertLinks();
    this._draft.updateDraft(this.draft)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.store.dispatch(DraftActions.removeDraft());
        this.store.dispatch(DraftActions.showDraftDialog({ show: false }));
        this.crafter.toaster('Artículo creado', '¡Felicidades!', 'success');
        this.router.navigateByUrl('/home');
      }
    })
  }

  private insertLinks(): void {
    this.inputs.forEach(i => {
      if(this.name[i] && this.link[i]) {
        this.draft.links.push({
          name: this.name[i],
          url: this.link[i]
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
