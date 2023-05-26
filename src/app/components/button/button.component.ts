import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() icon: string | null = null;
  @Input() text: string = '[SEM TEXTO]';
}
