import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleArticleRoutingModule } from './single-article.routing';

import { SingleArticleComponent } from './single-article.component';
import { SingleArticleIndexComponent } from './components/single-article-index/single-article-index.component';
import { SingleArticleContentComponent } from './components/single-article-content/single-article-content.component';
import { LayoutModule } from '@shared/components/layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '@app/shared/shared.module';
import { ArticlesModule } from '@app/pages/home/components/articles/articles.module';
import { ComponentsModule } from '@shared/components/components.module';
import { SingleArticleEditComponent } from './components/single-article-edit/single-article-edit.component';
import { CreatorService } from '../create/services/creator.service';

import {
  NbButtonModule,
  NbPopoverModule,
  NbInputModule,
  NbCheckboxModule,
  NbProgressBarModule,
  NbTooltipModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    SingleArticleComponent,
    SingleArticleIndexComponent,
    SingleArticleContentComponent,
    SingleArticleEditComponent
  ],
  imports: [
    CommonModule,
    SingleArticleRoutingModule,
    LayoutModule,
    SharedModule,
    MarkdownModule.forChild(),
    ArticlesModule,
    ComponentsModule,
    NbButtonModule,
    NbPopoverModule,
    NbTooltipModule,
    NbInputModule,
    NbCheckboxModule,
    NbProgressBarModule
  ],
  providers: [CreatorService]
})

export class SingleArticleModule { }
