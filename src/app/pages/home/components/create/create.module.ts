import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create.routing';
import { CreateComponent } from './create.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,

  ]
})

export class CreateModule { }
