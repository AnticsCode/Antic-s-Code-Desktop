import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleOnlyComponent } from './components/article-only/article-only.component';
import { ArticlesIntroComponent } from './components/articles-intro/articles-intro.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: '',
        component: ArticlesIntroComponent
      },
      {
        path: 'article/:slug',
        component: ArticleOnlyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArticlesRoutingModule { }
