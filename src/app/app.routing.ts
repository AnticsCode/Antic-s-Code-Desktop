import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from '@shared/components/error404/error404.component';
import { ErrorGuard } from '@core/guards/error.guard';
import { UserGuard } from '@core/guards/user.guard';
import { LoginGuard } from '@core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [UserGuard],
    loadChildren: () => import('./pages/home/home.module')
                        .then(mod => mod.HomeModule), data: {name: 'Home'}
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/login/login.module')
                        .then(mod => mod.LoginModule), data: {name: 'Login'}
  },
  { path: '**', canActivate: [ErrorGuard], component: Error404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'top'
  })
],
  exports: [RouterModule]
})

export class AppRoutingModule {}
