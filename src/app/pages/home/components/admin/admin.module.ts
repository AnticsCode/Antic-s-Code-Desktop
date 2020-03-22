import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@app/shared/shared.module';
import { AdminIndexComponent } from './components/admin-index/admin-index.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminContentDraftListComponent } from './components/admin-content/components/admin-content-draft-list/admin-content-draft-list.component';
import { NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { LayoutModule } from '@shared/components/layout/layout.module';
import { AdminEditArticleComponent } from './components/admin-edit-article/admin-edit-article.component';
import { AdminPreviewArticleComponent } from './components/admin-preview-article/admin-preview-article.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticlesModule } from '@app/pages/home/components/articles/articles.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminContentComponent,
    AdminContentDraftListComponent,
    AdminEditArticleComponent,
    AdminPreviewArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    NbButtonModule,
    LayoutModule,
    MarkdownModule.forChild(),
    ArticlesModule,
    NbCheckboxModule,
    NbInputModule
  ]
})

export class AdminModule { }
