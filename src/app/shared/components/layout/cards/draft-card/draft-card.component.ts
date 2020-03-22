import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-draft-card',
  templateUrl: './draft-card.component.html',
  styleUrls: ['./draft-card.component.scss']
})

export class DraftCardComponent implements OnInit {

  @Input() draft: Article;

  constructor() { }

  ngOnInit() { }

}
