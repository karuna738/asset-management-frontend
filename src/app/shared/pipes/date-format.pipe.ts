import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'dateFormat', standalone: true })
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string, format: string = 'mediumDate'): string {
    return formatDate(value, format, 'en-US');
  }
}
