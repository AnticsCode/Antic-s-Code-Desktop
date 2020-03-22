import { Component, OnInit, NgZone } from '@angular/core';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { Subject, of } from 'rxjs';
import { takeUntil, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DraftsService, CrafterService } from '@app/core/services/services.index';
import { HttpErrorResponse } from '@angular/common/http';
import { CHECKSTATUS } from '@app/shared/shared.data';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';
import * as remote from 'remote-file-size';

@Component({
  selector: 'app-admin-edit-article',
  templateUrl: './admin-edit-article.component.html',
  styleUrls: ['./admin-edit-article.component.scss']
})

export class AdminEditArticleComponent implements OnInit {

  draft: Article;
  private unsubscribe$ = new Subject<void>();
  check = CHECKSTATUS;
  public coverSize: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _draft: DraftsService,
              private store: Store<AppState>,
              private router: Router,
              private crafter: CrafterService,
              private zone: NgZone) { }

  ngOnInit() {
    this.getDraftBySlug();
  }

  private getDraftBySlug(): void {
    this.activatedRoute.paramMap
    .pipe(switchMap((res: ParamMap) => {
        const slug = res.get('slug');
        if (!slug) { return of(null) }
        return this._draft.getDraftBySlug(slug);
    }), takeUntil(this.unsubscribe$))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.draft = res.draft;
        this.getCoverSize(this.draft.cover);
       }
    } , (err: HttpErrorResponse) => console.log(err));
  }

  public previewArticle(): void {
    this.store.dispatch(DraftActions.savePreviewArticle({article: this.draft}));
    this.router.navigateByUrl('home/admin/preview');
  }

  public publish(): void {
    const ok = Object.values(this.draft.check).every(i => i.ok);
    Object.values(this.draft.check).forEach(c => {
      if (c.ok) {
        c.cause = null;
      }
    });

    if (this.draft.links.length === 0) {
      this.draft.check.hasGoodLinks.ok = true;
    }

    if (ok) {
      this._draft.publishDraft(this.draft)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.store.dispatch(DraftActions.removeDraft());
          this.crafter.toaster('Artículo publicado', '!Genial!', 'success');
          this.router.navigateByUrl('home/admin');
        }
      });
    } else {
      this._draft.updateDraft(this.draft)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
        if (res.ok) {
          this.store.dispatch(DraftActions.removeDraft());
          this.crafter.toaster('Artículo actualizado', '!Bien!', 'success');
          this.router.navigateByUrl('home/admin');
        }
      });
    }
  }

  public getCoverSize(cover: string) {
    this.zone.runOutsideAngular(() => {
      remote(cover, (err: any, size: number) => {
        this.zone.run(() => {
          this.coverSize = (size / 1000).toFixed(2);
          if (Number(this.coverSize) > 100) {
            this.draft.check.hasGoodCover.ok = false;
          }

          if (isNaN(size)) {
            this.coverSize = '0';
            this.draft.check.hasGoodCover.ok = false;
          }
        });
      })
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
