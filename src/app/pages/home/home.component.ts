import { Component, OnInit } from '@angular/core';
import { StorageService } from '@app/core/storage/storage.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private ls: StorageService,
              private _theme: NbThemeService) { }

  ngOnInit() {
    this.checkTheme();
  }

  private checkTheme(): void {
    const t = this.ls.get('theme');
    if (t) {
      setTimeout(() => {
        this._theme.changeTheme(t);
      }, 100);
    }
  }

}
