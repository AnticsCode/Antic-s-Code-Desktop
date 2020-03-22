import { Component, OnInit } from '@angular/core';
import { MENUITEMS } from '@shared/shared.data';
import { UserService } from '@app/core/services/services.index';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  items = MENUITEMS
  user: User;

  constructor(public _user: UserService) { }

  ngOnInit() {
    this.user = this._user.getUser();
  }

}
