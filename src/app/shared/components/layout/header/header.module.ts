import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule, NbActionsModule } from '@nebular/theme';

import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { HeaderActionsComponent } from './components/header-actions/header-actions.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderActionsComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    NbActionsModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderActionsComponent
  ]
})

export class HeaderModule { }
