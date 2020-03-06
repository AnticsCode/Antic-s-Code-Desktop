import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create.component';
import { CreateContentComponent } from './components/create-content/create-content.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    children: [
      {
        path: '',
        component: CreateContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateRoutingModule { }
