import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrt-transit-list',
  templateUrl: './transit-list.component.html',
  styleUrls: ['./transit-list.component.css'],
})
export class TransitListComponent {
  @Input() data: any[] = [];
}
