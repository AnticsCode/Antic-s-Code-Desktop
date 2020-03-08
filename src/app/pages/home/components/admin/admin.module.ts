import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { SharedModule } from '@app/shared/shared.module';
import { AdminIndexComponent } from './components/admin-index/admin-index.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminContentDraftListComponent } from './components/admin-content/components/admin-content-draft-list/admin-content-draft-list.component';
import { AdminContentDraftCardComponent } from './components/admin-content/components/admin-content-draft-card/admin-content-draft-card.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AdminComponent,
    AdminIndexComponent,
    AdminContentComponent,
    AdminContentDraftListComponent,
    AdminContentDraftCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    NbButtonModule
  ]
})

export class AdminModule { }
