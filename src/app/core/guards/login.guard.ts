import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({providedIn: 'root'})

export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private user: UserService) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.user.getUser()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }
}
