import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})

export class HeaderActionsComponent implements OnInit {

  show = false;

  constructor() { }

  ngOnInit() { }

  exit(): void {
    const win = remote.getCurrentWindow();
    win.close();
  }


}
