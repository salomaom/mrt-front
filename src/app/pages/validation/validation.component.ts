import { Component, OnInit } from '@angular/core';

import { ValidationService } from './validation.service';
import { RTClientService } from '../../services/real-time-client/rtclient.service';
import Filter from './models/filter';

@Component({
  selector: 'mrt-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  public transactions: any[] = [];
  public filters: Filter | null = null;

  constructor(
    private service: ValidationService,
    private transactionRTService: RTClientService
  ) {}

  ngOnInit() {
    this.filter('01');
    this.getFilters();
  }

  filter(via: string) {
    this.service
      .filter({ plaza: via })
      .subscribe((transactions) => (this.transactions = transactions));
  }

  getFilters() {
    this.service.getFilters().subscribe((filters) => {
      this.filters = filters;
    });
  }
}
