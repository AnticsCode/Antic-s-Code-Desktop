import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { CreateConfirmRoutingModule } from './create-confirm.routing';
import { CreateConfirmIndexComponent } from './components/create-confirm-index/create-confirm-index.component';
import { CreateConfirmContentComponent } from './components/create-confirm-content/create-confirm-content.component';
import { CreateConfirmComponent } from './create-confirm.component';
import { NbPopoverModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    CreateConfirmIndexComponent,
    CreateConfirmContentComponent,
    CreateConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreateConfirmRoutingModule,
    NbPopoverModule,
    NbButtonModule,
    NbInputModule,
    MarkdownModule.forChild()
  ]
})

export class CreateConfirmModule { }
