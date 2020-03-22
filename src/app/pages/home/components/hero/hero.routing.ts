import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
     {
       path: '',
       component: HeroContentComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeroRoutingModule { }
