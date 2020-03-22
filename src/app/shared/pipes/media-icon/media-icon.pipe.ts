import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mediaIcon'})

export class MediaIconPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'portfolio') {
      return 'browser';
    }
    return value;
  }
}
