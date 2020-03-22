import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, Article } from '@app/shared/interfaces/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CATEGORIES, LANGUAGES, TAGS, BADGES, LEVELS } from '@app/shared/shared.data';
import { Subject } from 'rxjs';
import { UserService, CrafterService } from '@app/core/services/services.index';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Location } from '@angular/common';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';
import * as DraftActions from '@app/core/ngrx/actions/draft.actions';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-article-edit',
  templateUrl: './single-article-edit.component.html',
  styleUrls: ['./single-article-edit.component.scss']
})

export class SingleArticleEditComponent implements OnInit, OnDestroy {

  draft: Article;
  user: User;
  articleForm: FormGroup;
  categories = CATEGORIES;
  languages = LANGUAGES;
  tagsList = TAGS;
  badgesList = BADGES;
  levelsList = LEVELS;
  imagePattern = '^.+\.(([pP][nN][gG])|([jJ][pP][gG]))$';  // Png, Jpg
  private unsubscribe$ = new Subject<void>();

  constructor(private _user: UserService,
              private router: Router,
              private store: Store<AppState>,
              private location: Location) { }

  ngOnInit() {
    this.user = this.getUser();
    this.getDraft();
  }

  get title() { return this.articleForm.get('title'); }
  get category() { return this.articleForm.get('category'); }
  get tags() { return this.articleForm.get('tags'); }
  get badges() { return this.articleForm.get('badges'); }
  get level() { return this.articleForm.get('level'); }
  get cover() { return this.articleForm.get('cover'); }
  get summary() { return this.articleForm.get('summary'); }

  private getUser(): User {
    return this._user.getUser();
  }

  private getDraft(): void {
    this.store.select(fromDrafts.getDraft)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: Article) => {
      if (res) {
        this.draft = res;
        this.createArticleForm();
      }
    })
  }

  private createArticleForm(): void {
    this.articleForm = new FormGroup({
            title: new FormControl(this.draft.title || null,
                                         [Validators.required,
                                          Validators.minLength(10),
                                          Validators.maxLength(30)]),
                author: new FormControl({ value: this.user.name,
                                          disabled: true
                                       },[Validators.required]),
         category: new FormControl(this.draft.category || null,
                                         [Validators.required]),
             tags: new FormControl(this.draft.tags || null,
                                         [Validators.required,
                                          this.selectValidator(3).bind(this)]),
           badges: new FormControl(this.draft.badges || null,
                                         [Validators.required,
                                          this.selectValidator(2).bind(this)]),
          summary: new FormControl(this.draft.summary || null, [
                                          Validators.required,
                                          Validators.minLength(100),
                                          Validators.maxLength(600)]),
           level: new FormControl(this.draft.level || null,
                                         [Validators.required]),
            cover: new FormControl(this.draft.cover || null,
                                         [Validators.required,
                                          Validators.minLength(4),
                                          Validators.pattern(this.imagePattern)])
    });
  }

  private selectValidator(limit: number) {
    return (control: FormControl) => {
      const c = control.value;
      if (c && c.length > limit) {
        return { error: true };
      }
      return null;
    };
  }

  public onSubmit(): void {
    if (this.articleForm.invalid) { return; }

    const {
      title,
      category,
      tags,
      badges,
      level,
      cover,
      summary
    } = this.articleForm.value;

    this.draft.title = title;
    this.draft.category = category;
    this.draft.tags = tags;
    this.draft.badges = badges;
    this.draft.level = level;
    this.draft.cover = cover;
    this.draft.summary = summary;

    this.store.dispatch(DraftActions.saveDraft({draft: this.draft}));
    this.router.navigateByUrl('/home/create');
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
