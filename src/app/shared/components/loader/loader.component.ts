import {
  Component,
  AfterViewInit,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements AfterViewInit {

  loading = true;
  timer = 4;  // 3.5s
  progress: HTMLElement;
  counter: HTMLElement;
  @Output() completed = new EventEmitter<boolean>();
  startTime: number = performance.now();
  raf: Function;

  constructor() {}

  ngAfterViewInit(): void {
    this.initTimer();
    this.initProgress();
    this.raf(this.update.bind(this));
  }

  private initProgress(): void {
    this.progress = document.getElementById('progress');
    this.counter = document.getElementById('counter');
    this.raf = (fn) => window.requestAnimationFrame(fn);
    this.startTime = performance.now();
  }

  private update() {
    const currentTime = performance.now();
    const time = (currentTime - this.startTime) / (this.timer * 1000);

    if (this.counter && this.progress) {
      this.progress.style.setProperty('--scale', time.toString());
      this.counter.textContent = Math.floor(Math.min(time, 1) * 100) + '%';
    }

    if (time >= 1.0) { return; }
    this.raf(this.update.bind(this));
  }

  private initTimer(): void {
    setTimeout(() => {
      this.loading = false;
      this.completed.emit(true);
    }, this.timer * 1000);
  }

}
