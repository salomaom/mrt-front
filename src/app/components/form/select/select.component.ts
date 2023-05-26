import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mrt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() label: string = '[SEM LABEL]';
  @Input() options: string[] = [];
  @Input() multiple: boolean = false;
}
