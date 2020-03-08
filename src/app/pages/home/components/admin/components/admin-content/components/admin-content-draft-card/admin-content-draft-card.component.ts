import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-admin-content-draft-card',
  templateUrl: './admin-content-draft-card.component.html',
  styleUrls: ['./admin-content-draft-card.component.scss']
})

export class AdminContentDraftCardComponent implements OnInit {

  @Input() draft: Article;

  constructor() { }

  ngOnInit() { }

}
