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
  public filters?: Filter;

  constructor(
    private service: ValidationService,
    private transactionRTService: RTClientService
  ) {}

  ngOnInit() {
    this.getFilters();
  }

  filter(via: string) {
    throw new Error('Not Implemented.');
  }

  getFilters() {
    this.service.getFilters().subscribe((filters) => {
      this.filters = filters;
    });
  }
}
