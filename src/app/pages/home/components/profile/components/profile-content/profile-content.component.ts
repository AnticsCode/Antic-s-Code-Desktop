import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/services/services.index';
import { User } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})

export class ProfileContentComponent implements OnInit {

  user: User;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.user = this.getUser();
   }

  getUser(): User {
    return this._user.getUser();
  }

}
