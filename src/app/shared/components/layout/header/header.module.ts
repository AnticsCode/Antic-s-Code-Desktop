import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NbSelectModule, NbActionsModule, NbTooltipModule, NbPopoverModule } from '@nebular/theme';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { HeaderActionsComponent } from './components/header-actions/header-actions.component';
import { SharedModule } from '@shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    ThemePickerComponent,
    HeaderActionsComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    NbSelectModule,
    NbActionsModule,
    NbTooltipModule,
    SharedModule,
    RouterModule,
    NbPopoverModule
  ],
  exports: [
    ThemePickerComponent,
    HeaderActionsComponent
  ],
  entryComponents: [
    SearchBarComponent
  ]
})

export class HeaderModule { }
