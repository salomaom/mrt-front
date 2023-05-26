import { Component } from '@angular/core';

@Component({
  selector: 'mrt-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent {
  isFiltersOpen: boolean = false;

  openFilters() {
    console.log('FOI', this.isFiltersOpen);
    this.isFiltersOpen = !this.isFiltersOpen;
  }
}
