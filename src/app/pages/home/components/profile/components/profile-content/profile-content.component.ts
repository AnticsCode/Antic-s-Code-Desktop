import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, DraftsService } from '@app/core/services/services.index';
import { User, Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { STATUSBUTTONS } from '@app/shared/shared.data';
import { Router } from '@angular/router';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})

export class ProfileContentComponent implements OnInit, OnDestroy {

  user: User;
  result: Article[];
  filteredResult: Article[] = [];
  buttons = STATUSBUTTONS;
  private unsubscribe$ = new Subject<void>();

  constructor(private _user: UserService,
              private _draft: DraftsService,
              private router: Router,
              private crafter: CrafterService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.user = this.getUser();
    this.getDraftListByUser();
   }

  getUser(): User {
    return this._user.getUser();
  }

  private getDraftListByUser(): void {
    this._draft.getDraftsByUser()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.result = [...res.drafts, ...res.articles];
        this.filteredResult = this.result;
      }
    });
  }

  public sort(status: string): void {
    if (status === 'All') {
      this.filteredResult = this.result;
      return;
    }
    this.filteredResult = this.result
    .filter((draft: Article) => {
      return draft.status === status;
    });
  }

  public navigate(draft: Article): void {
    if (draft.status === 'Draft') {
      this.crafter.toaster('Editar un Draft',
                           `Para editar un Draft, vuélvelo a cargar
                            cuando vayas a crear un nuevo Artículo`,
                           'info');
      return;
    }
    this.store.dispatch(DraftActions.saveDraft({draft}));
    this.router.navigateByUrl('/home/single-article');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
