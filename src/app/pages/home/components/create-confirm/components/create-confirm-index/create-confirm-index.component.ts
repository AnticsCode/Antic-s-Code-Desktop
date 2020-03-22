import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Observable } from 'rxjs';
import { Article } from '@app/shared/interfaces/interfaces';
import * as fromDrafts from '@app/core/ngrx/selectors/draft.selectors';

@Component({
  selector: 'app-create-confirm-index',
  templateUrl: './create-confirm-index.component.html',
  styleUrls: ['./create-confirm-index.component.scss']
})

export class CreateConfirmIndexComponent implements OnInit {

  draft$: Observable<Article>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.draft$ = this.store.select(fromDrafts.getDraft);
  }

}
