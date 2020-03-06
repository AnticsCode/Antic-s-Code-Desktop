import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';
import { HelpContentComponent } from './components/help-content/help-content.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      {
        path: '',
        component: HelpContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HelpRoutingModule { }
