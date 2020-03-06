import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadDraftComponent } from './load-draft/load-draft.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    LoadDraftComponent
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
