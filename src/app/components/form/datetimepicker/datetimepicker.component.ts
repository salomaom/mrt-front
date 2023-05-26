import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrt-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css'],
})
export class DatetimepickerComponent {
  @Input() label: string = '';
}
