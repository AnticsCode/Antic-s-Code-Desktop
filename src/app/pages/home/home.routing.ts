import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/hero/hero.module')
                        .then(mod => mod.HeroModule), data: {name: 'Hero'}
      },
      {
        path: 'articles',
        loadChildren: () => import('./components/articles/articles.module')
                        .then(mod => mod.ArticlesModule), data: {name: 'Articles'}
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
