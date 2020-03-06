import { Component, OnInit } from '@angular/core';
import { MenuItems } from '@shared/shared.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  items = MenuItems

  constructor() { }

  ngOnInit() { }

}
