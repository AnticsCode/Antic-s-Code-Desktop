import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'status'})

export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    switch(value) {
      case 'Pending': return 'danger';
      case 'Draft': return 'warning';
      case 'Hidden': return 'info';
      case 'Approved': return 'success';
      default: return 'basic'
    }
  }
}
