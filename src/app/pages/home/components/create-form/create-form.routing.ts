import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateFormComponent } from './create-form.component';
import { CreateFormContentComponent } from './components/create-form-content/create-form-content.component';

const routes: Routes = [
  {
    path: '',
    component: CreateFormComponent,
    children: [
      {
        path: '',
        component: CreateFormContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateFormRoutingModule { }
