import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftCardComponent } from './draft-card/draft-card.component';
import { SharedModule } from '@shared/shared.module';
import { NbButtonModule } from '@nebular/theme';
import { BasicCardComponent } from './basic-card/basic-card.component';

@NgModule({
  declarations: [
    DraftCardComponent,
    BasicCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NbButtonModule
  ],
  exports: [
    DraftCardComponent,
    BasicCardComponent
  ]
})

export class CardsModule { }
