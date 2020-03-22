import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Subject } from 'rxjs';

@Injectable()

export class CreatorService {

  previewChange = new Subject<string>();

  constructor() {
    if (!environment.production) { console.log('CreatorService'); }
   }

   public makeChange(text: string): void {
    this.previewChange.next(text);
   }
}
