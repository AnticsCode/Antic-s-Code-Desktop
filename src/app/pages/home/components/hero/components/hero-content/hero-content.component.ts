import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from '@app/app.config';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.scss']
})

export class HeroContentComponent implements OnInit {

  version = APP_CONSTANTS.APP_VERSION;

  constructor() { }

  ngOnInit() { }

}
