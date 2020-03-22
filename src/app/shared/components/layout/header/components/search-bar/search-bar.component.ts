import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() closed = new EventEmitter<void>();

  value = '';

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  close(): void {
    const el = document.getElementById('search-bar');
    if (el) {
      this.renderer.removeClass(el, 'bounceInDown');
      this.renderer.addClass(el, 'bounceOutUp');

      setTimeout(() => {
        this.closed.emit();
      }, 800);
    }
  }

}
