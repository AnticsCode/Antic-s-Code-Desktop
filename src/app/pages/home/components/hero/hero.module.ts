import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero.routing';
import { HeroComponent } from './hero.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    NbLayoutModule
  ]
})

export class HeroModule { }
