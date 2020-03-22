import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileIndexComponent } from './components/profile-index/profile-index.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { LayoutModule } from '@shared/components/layout/layout.module';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileIndexComponent,
    ProfileContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    LayoutModule,
    NbButtonModule
  ]
})

export class ProfileModule { }
