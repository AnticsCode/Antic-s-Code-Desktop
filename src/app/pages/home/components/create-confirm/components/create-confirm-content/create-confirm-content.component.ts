import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, ArticleResponse, Link } from '@app/shared/interfaces/interfaces';
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
  name: string[] = ['', ''];
  link: string[] = ['', ''];
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
         this.checkDraftLinks();
       }
     })
  }

  submit(): void {
    this.insertLinks();
    if (this.draft.status === 'Approved') {
      this._draft.unPublishDraft(this.draft)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.store.dispatch(DraftActions.removeDraft());
          this.crafter.toaster('Artículo archivado', `Tu Artículo ha pasado a
                                                      pendiente hasta que un moderador
                                                      revise los cambios`, 'info');
          this.router.navigateByUrl('/home');
        }
      });
    } else {
      this._draft.updateDraft(this.draft)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.store.dispatch(DraftActions.removeDraft());
          this.crafter.toaster('Artículo actualizado', '¡Genial!', 'success');
          this.router.navigateByUrl('/home');
        }
      });
    }
  }

  private insertLinks(): void {
    this.draft.links = [];
    this.inputs.forEach(i => {
      if(this.name[i] && this.link[i]) {
        this.draft.links.push({
          name: this.name[i],
          url: this.link[i]
        });
      }
    });
  }

  addLink(): void {
    if (this.inputs.length >= 2 || this.inputs.length < 1) { return; }
    this.inputs.push(this.inputs.length);
  }

  removeLink(): void {
    this.inputs.splice(this.inputs.length -1, 1);
    this.name[1] = '';
    this.link[1] = ''
  }

  private checkDraftLinks(): void {
    if (this.draft.links.length > 0) {
      this.draft.links.forEach((link: Link, i) => {
        this.name[i] = link.name;
        this.link[i] = link.url;
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
