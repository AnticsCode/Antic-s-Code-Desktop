import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})

export class ThemePickerComponent implements OnInit {

  themes: string[] = ['default', 'dark', 'cosmic'];

  constructor(private _theme: NbThemeService) { }

  ngOnInit() { }

  changeTheme(theme:string): void {
    this._theme.changeTheme(theme);
  }

}
