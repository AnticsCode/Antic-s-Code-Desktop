import { NgModule } from '@angular/core';

import {
  NbThemeModule,
  NbSidebarModule,
  NbMenuModule,
  NbActionsModule,
  NbIconModule,
  NbLayoutModule,
  NbSelectModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSelectModule
  ],
  exports: [
    NbThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbSelectModule
  ]
})

export class NebularModule { }
