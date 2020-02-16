import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles.routing';
import { ComponentsModule } from '@shared/components/components.module';
import { NbLayoutModule, NbCardModule, NbListModule, NbSearchModule } from '@nebular/theme';

import { ArticlesComponent } from './articles.component';
import { ArticlesIndexComponent } from './components/articles-index/articles-index.component';
import { ArticleOnlyComponent } from './components/article-only/article-only.component';
import { ArticlesIntroComponent } from './components/articles-intro/articles-intro.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesIndexComponent,
    ArticleOnlyComponent,
    ArticlesIntroComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSearchModule,
    ComponentsModule,
    SharedModule
  ]
})

export class ArticlesModule { }
