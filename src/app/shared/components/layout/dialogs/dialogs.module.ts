import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadDraftComponent } from './load-draft/load-draft.component';
import { NbButtonModule } from '@nebular/theme';
import { PublishArticleComponent } from './publish-article/publish-article.component';

@NgModule({
  declarations: [
    LoadDraftComponent,
    PublishArticleComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule
  ],
  exports: [
    LoadDraftComponent
  ]
})

export class DialogsModule { }
