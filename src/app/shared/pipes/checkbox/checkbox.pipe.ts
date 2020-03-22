import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'checkbox'})

export class CheckboxPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'success' : 'danger'
  }
}
