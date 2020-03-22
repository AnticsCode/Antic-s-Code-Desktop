import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserResponse } from '@shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '@core/storage/storage.service';
import { LoginService } from '@core/services/login/login.service';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as UserActions from '@core/ngrx/actions/user.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  remember = false;
  loading = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private login: LoginService,
              private userService: UserService,
              private ls: StorageService,
              private router: Router,
              private crafter: CrafterService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.createSignInForm();
    this.rememberMe();
    this.checkUserToken();
  }

  onSubmit(): void {
    if (this.signInForm.invalid) { return; }
    const { email, password } = this.signInForm.value;
    this.signIn(email, password);
  }

  private signIn(e: string, p: string): void {
    this.loading = true;
    this.login.signIn(e, p)
      .pipe(
        takeUntil(this.unsubscribe$),
        finalize(() => this.loading = false)
        )
      .subscribe((res: UserResponse) => {
        if (res.ok) { this.handleSignIn(res); }
      },
        (err: HttpErrorResponse) => {
          this.crafter.toaster('Error de acceso',
                               'Comprueba tus credenciales',
                               'error');
          console.log(err);
      });
  }

  private createSignInForm(): void {
    this.signInForm = new FormGroup({
       email: new FormControl(null, [Validators.required,
                                     Validators.email,
                                     Validators.minLength(5),
                                     Validators.maxLength(35)]),
    password: new FormControl(null, [Validators.required,
                                     Validators.minLength(5),
                                     Validators.maxLength(25)])});
  }

  private rememberMe(): void {
    const id = this.ls.get('user');
    const re = this.ls.get('remember');

    if ( re && id) {
      this.userService.getUserById(id)
       .pipe(takeUntil(this.unsubscribe$))
       .subscribe((res: UserResponse) => {
            if (res.ok) {
              this.signInForm.controls.email.setValue(res.user.email);
              this.remember = true;
          }
      });
    }
  }

  private handleSignIn(data: UserResponse): void {
    this.userService.setUser(data.user);
    this.ls.userLogin(data, this.remember);
    this.router.navigateByUrl('/home');
  }

  private checkUserToken(): void {
    if (this.ls.get('token')) {
      this.store.dispatch(UserActions.verifyToken());
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
