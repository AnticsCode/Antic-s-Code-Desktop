import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  user: User;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.user = this.getUser();
   }

  getUser(): User {
    return this._user.getUser();
  }

}
