import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CreateDraftGuard } from '@app/core/guards/create-draft.guard';
import { AdminGuard } from '@app/core/guards/admin.guard';

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
                        .then(mod => mod.CreateModule), data: {name: 'Create'},
        canActivate: [CreateDraftGuard]
      },
      {
        path: 'create-form',
        loadChildren: () => import('./components/create-form/create-form.module')
                        .then(mod => mod.CreateFormModule), data: {name: 'Create Form'}
      },
      {
        path: 'create-confirm',
        loadChildren: () => import('./components/create-confirm/create-confirm.module')
                        .then(mod => mod.CreateConfirmModule), data: {name: 'Create Confirm'},
        canActivate: [CreateDraftGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./components/admin/admin.module')
                        .then(mod => mod.AdminModule), data: {name: 'Admin'},
        canActivate: [AdminGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./components/profile/profile.module')
                        .then(mod => mod.ProfileModule), data: {name: 'Profile'}
      },
      {
        path: 'single-article',
        loadChildren: () => import('./components/single-article/single-article.module')
                        .then(mod => mod.SingleArticleModule), data: {name: 'Single Article'}
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
