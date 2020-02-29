import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create.routing';
import { CreateComponent } from './create.component';
import { MarkdownModule } from 'ngx-markdown';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { CreateIndexComponent } from './components/create-index/create-index.component';

@NgModule({
  declarations: [
    CreateComponent,
    CreateContentComponent,
    CreateIndexComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,

  ]
})

export class CreateModule { }
