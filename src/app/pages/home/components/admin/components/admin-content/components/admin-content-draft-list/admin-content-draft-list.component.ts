import { Component, OnInit } from '@angular/core';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { DraftsService } from '@app/core/services/drafts/drafts.service';
import { StatusButtons } from '@app/shared/shared.data';

@Component({
  selector: 'app-admin-content-draft-list',
  templateUrl: './admin-content-draft-list.component.html',
  styleUrls: ['./admin-content-draft-list.component.scss']
})

export class AdminContentDraftListComponent implements OnInit {

  draftList: Article[];
  filteredDraftList: Article[];
  buttons = StatusButtons;

  constructor(private _draft: DraftsService) { }

  ngOnInit() {
    this.getDraftList();
  }

  private getDraftList(): void {
    this._draft.getDrafts()
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.draftList = res.drafts;
        this.filteredDraftList = res.drafts;
      }
    });
  }

  public sort(status: string): void {
    if (status === 'All') {
      this.filteredDraftList = this.draftList;
      return;
    }
    this.filteredDraftList = this.draftList
    .filter((draft: Article) => {
      return draft.status === status;
    });
  }

}
