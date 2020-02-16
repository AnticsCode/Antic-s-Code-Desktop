import { Component, OnInit, Input } from '@angular/core';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-articles-index',
  templateUrl: './articles-index.component.html',
  styleUrls: ['./articles-index.component.scss']
})

export class ArticlesIndexComponent implements OnInit {

  @Input() articles: Article[];

  constructor() { }

  ngOnInit() { }

}
