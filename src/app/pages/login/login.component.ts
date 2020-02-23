import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  login = false;

  constructor(private render: Renderer2,
              private router: Router) { }

  ngOnInit() { }

  complete(): void {
    const intro = document.querySelector('#intro');
    const logo = document.querySelector('#logo');
    this.addCSS(intro, logo);
    setTimeout(() => {
      this.login = true;
    }, 150);
  }

  private addCSS(intro: Element, logo: Element): void {
    this.render.addClass(logo, 'AntiSpin');
    this.render.addClass(intro, 'MoveUp');
  }

}
