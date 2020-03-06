import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-form-tab-intro',
  templateUrl: './create-form-tab-intro.component.html',
  styleUrls: ['./create-form-tab-intro.component.scss']
})

export class CreateFormTabIntroComponent implements OnInit {

  @Output() start = new EventEmitter<void>();
  accepted = false;

  constructor() { }

  ngOnInit() { }

  letsGo(): void {
    if (!this.accepted) { return; }
    this.start.emit();
  }

}
