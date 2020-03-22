import { Pipe, PipeTransform } from '@angular/core';
import { URI } from '@app/app.config';

@Pipe({name: 'publicSlug'})

export class PublicSlugPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return `${URI}/article/${value}`
    }
    return value;
  }
}
