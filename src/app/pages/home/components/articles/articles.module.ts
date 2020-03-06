import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles.routing';
import { ComponentsModule } from '@shared/components/components.module';
import { NbLayoutModule, NbCardModule, NbListModule, NbSearchModule } from '@nebular/theme';
import { SharedModule } from '@app/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

import { ArticlesComponent } from './articles.component';
import { ArticlesIndexComponent } from './components/articles-index/articles-index.component';
import { ArticleOnlyComponent } from './components/article-only/article-only.component';
import { ArticlesIntroComponent } from './components/articles-intro/articles-intro.component';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesIndexComponent,
    ArticleOnlyComponent,
    ArticlesIntroComponent,
    ArticleHeaderComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSearchModule,
    ComponentsModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  exports: [
    ArticleHeaderComponent
  ]
})

export class ArticlesModule { }
