import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';
import { UserService } from '@core/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})

export class HeaderActionsComponent implements OnInit {

  show = false;

  constructor(private _user: UserService,
              private router: Router) { }

  ngOnInit() { }

  exit(): void {
    const win = remote.getCurrentWindow();
    win.close();
  }

  logout(): void {
    this._user.logout();
    this.router.navigateByUrl('/login');
  }


}
