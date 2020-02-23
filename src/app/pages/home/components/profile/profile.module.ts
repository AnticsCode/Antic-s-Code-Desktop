import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileComponent } from './profile.component';
import { ProfileIndexComponent } from './components/profile-index/profile-index.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileIndexComponent,
    ProfileContentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})

export class ProfileModule { }
