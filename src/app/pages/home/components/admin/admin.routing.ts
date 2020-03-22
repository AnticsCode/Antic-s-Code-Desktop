import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminEditArticleComponent } from './components/admin-edit-article/admin-edit-article.component';
import { AdminPreviewArticleComponent } from './components/admin-preview-article/admin-preview-article.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminContentComponent
      },
      {
        path: 'edit/:slug',
        component: AdminEditArticleComponent
      },
      {
        path: 'preview',
        component: AdminPreviewArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
