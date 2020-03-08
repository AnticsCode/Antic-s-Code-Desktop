import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConfirmContentComponent } from './components/create-confirm-content/create-confirm-content.component';
import { CreateConfirmComponent } from './create-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: CreateConfirmComponent,
    children: [
      {
        path: '',
        component: CreateConfirmContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CreateConfirmRoutingModule { }
