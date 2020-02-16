import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  items: MenuItem[] = [
    { name: 'Home', link: '/home', icon: 'home-outline' },
    { name: 'Noticias', link: './news', icon: 'cast-outline' },
    { name: 'Artículos', link: './articles', icon: 'file-text-outline' },
    { name: 'Categorías', link: './categories', icon: 'pricetags-outline' },
    { name: 'Escritores', link: './writers', icon: 'edit-2-outline' },
    { name: 'Ayuda', link: './help', icon: 'question-mark-circle-outline' }
  ];

  constructor() { }

  ngOnInit() { }

}
