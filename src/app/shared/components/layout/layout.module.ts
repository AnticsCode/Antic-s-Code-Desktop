import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { DialogsModule } from './dialogs/dialogs.module';
import { SnackbarsModule } from './snackbars/snackbars.module';
import { CardsModule } from './cards/cards.module';

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
    SnackbarsModule,
    CardsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HeaderModule,
    DialogsModule,
    SnackbarsModule,
    CardsModule
  ]
})

export class LayoutModule { }
