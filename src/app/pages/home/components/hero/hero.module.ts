import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero.routing';
import { HeroComponent } from './hero.component';
import { HeroIndexComponent } from './components/hero-index/hero-index.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { NbIconModule, NbDialogService, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HeroComponent,
    HeroIndexComponent,
    HeroContentComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    NbIconModule,
    NbDialogModule.forChild(),
  ]
})

export class HeroModule { }
