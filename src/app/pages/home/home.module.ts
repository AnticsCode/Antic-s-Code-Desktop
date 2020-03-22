import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})

export class HomeModule {}
