import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WritersComponent } from './writers.component';
import { WritersContentComponent } from './components/writers-content/writers-content.component';

const routes: Routes = [
  {
    path: '',
    component: WritersComponent,
    children: [
      {
        path: '',
        component: WritersContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WritersRoutingModule { }
