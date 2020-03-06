import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '@shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    HeaderModule
  ]
})

export class LayoutModule { }
