import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news.routing';

import { NewsIndexComponent } from './components/news-index/news-index.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsIndexComponent,
    NewsContentComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})

export class NewsModule { }
