import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { DialogsModule } from './dialogs/dialogs.module';
import { SnackbarsModule } from './snackbars/snackbars.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    RouterModule,
    DialogsModule,
    SnackbarsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HeaderModule,
    DialogsModule,
    SnackbarsModule
  ]
})

export class LayoutModule { }
