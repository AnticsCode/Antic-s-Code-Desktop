import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create.routing';
import { CreateComponent } from './create.component';
import { MarkdownModule } from 'ngx-markdown';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { CreateIndexComponent } from './components/create-index/create-index.component';
import { NbInputModule, NbButtonModule } from '@nebular/theme';
import { CreatorService } from './services/creator.service';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '@shared/components/components.module';
import { ArticlesModule } from '../articles/articles.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    CreateComponent,
    CreateContentComponent,
    CreateIndexComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    NbInputModule,
    NbButtonModule,
    MarkdownModule,
    FormsModule,
    ComponentsModule,
    ArticlesModule,
    SharedModule,
  ],
  providers: [
    CreatorService
  ]
})

export class CreateModule { }
