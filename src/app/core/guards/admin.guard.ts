import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({providedIn: 'root'})

export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private _user: UserService) { }

  canActivate(): Observable<boolean> | boolean {
    const user = this._user.getUser();
    if (user.account === 'Admin' || user.account === 'Super') {
      return true;
    }
    this.router.navigateByUrl('/home');
    return false;
  }
}
