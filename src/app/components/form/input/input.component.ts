import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() value: string = '';
}
