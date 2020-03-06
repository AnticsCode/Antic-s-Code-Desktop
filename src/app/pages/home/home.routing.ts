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
        path: 'news',
        loadChildren: () => import('./components/news/news.module')
                        .then(mod => mod.NewsModule), data: {name: 'News'}
      },
      {
        path: 'articles',
        loadChildren: () => import('./components/articles/articles.module')
                        .then(mod => mod.ArticlesModule), data: {name: 'Articles'}
      },
      {
        path: 'writers',
        loadChildren: () => import('./components/writers/writers.module')
                        .then(mod => mod.WritersModule), data: {name: 'Writers'}
      },
      {
        path: 'help',
        loadChildren: () => import('./components/help/help.module')
                        .then(mod => mod.HelpModule), data: {name: 'Help'}
      },
      {
        path: 'create',
        loadChildren: () => import('./components/create/create.module')
                        .then(mod => mod.CreateModule), data: {name: 'Create'}
      },
      {
        path: 'profile',
        loadChildren: () => import('./components/profile/profile.module')
                        .then(mod => mod.ProfileModule), data: {name: 'Profile'}
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
