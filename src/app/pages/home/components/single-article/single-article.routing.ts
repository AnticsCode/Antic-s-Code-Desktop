import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleArticleComponent } from './single-article.component';
import { SingleArticleContentComponent } from './components/single-article-content/single-article-content.component';
import { SingleArticleEditComponent } from './components/single-article-edit/single-article-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SingleArticleComponent,
    children: [
      {
        path: '',
        component: SingleArticleContentComponent
      },
      {
        path: 'edit',
        component: SingleArticleEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SingleArticleRoutingModule { }
