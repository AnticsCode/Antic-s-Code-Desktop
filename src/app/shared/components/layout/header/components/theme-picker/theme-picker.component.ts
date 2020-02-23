import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { StorageService } from '@core/storage/storage.service';
import { APP_CONSTANTS } from '@app/app.config';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})

export class ThemePickerComponent implements OnInit {

  themes: string[] = ['default', 'dark', 'cosmic'];
  selectedTheme: string;

  constructor(private _theme: NbThemeService,
              private ls: StorageService) { }

  ngOnInit() {
    this.selectedTheme = this.getTheme();
    this.checkTheme();
  }

  private getTheme(): string {
    return this.ls.get('theme') || 'default';
  }

  private checkTheme(): void {
    this.selectedTheme ? this._theme.changeTheme(this.selectedTheme)
                       : this._theme.changeTheme(APP_CONSTANTS.THEME);
  }

  changeTheme(theme: string): void {
    this._theme.changeTheme(theme);
    this.ls.setKey('theme', theme);
  }

}
