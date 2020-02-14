import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  items: MenuItem[] = [
    { name: 'Home', link: '/', icon: 'home-outline' },
    { name: 'Noticias', link: '/', icon: 'cast-outline' },
    { name: 'Artículos', link: './articles', icon: 'file-text-outline' },
    { name: 'Categorías', link: '/', icon: 'pricetags-outline' },
    { name: 'Escritores', link: '/', icon: 'edit-2-outline' },
    { name: 'Ayuda', link: '/', icon: 'question-mark-circle-outline' }
  ];

  constructor() { }

  ngOnInit() { }

}
