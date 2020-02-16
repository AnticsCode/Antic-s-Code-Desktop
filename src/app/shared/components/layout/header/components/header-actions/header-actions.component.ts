import { Component, OnInit } from '@angular/core';
import { HeaderAction } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})

export class HeaderActionsComponent implements OnInit {

  actions: HeaderAction[] = [
    { icon: 'brush-outline', link: './create', status: 'success' },
    { icon: 'search-outline', link: '', status: null },
    { icon: 'person-outline', link: './profile', status: null },
    { icon: 'settings-2-outline', link: './settings', status: null },
    { icon: 'power-outline', link: '', status: 'danger' }
  ];

  constructor() { }

  ngOnInit() { }

}
