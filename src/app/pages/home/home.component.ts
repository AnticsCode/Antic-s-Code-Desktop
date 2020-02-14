import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'Perfil',
      link: null,
      icon: 'person-outline'
    },
    {
      title: 'Artículos',
      link: '/home/articles',
      icon: 'archive-outline'
    },
    {
      title: 'Favoritos',
      link: null,
      icon: 'star-outline'
    }
   ];

  constructor(private theme: NbThemeService) { }

  ngOnInit() {
    this.theme.changeTheme('dark');
  }

}
