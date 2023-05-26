import { Component } from '@angular/core';

import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  datetime: string;
  place: string;
  anomaly: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '13/04/2023 12:34:12',
    place: 'Charlton St - New York',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '19/08/2023 09:21:56',
    place: 'Broadway Ave - Los Angeles',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '05/06/2023 17:45:30',
    place: 'Main St - Chicago',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '27/09/2023 14:52:18',
    place: 'Market St - San Francisco',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '10/07/2023 08:15:45',
    place: 'Queen St - Toronto',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '02/11/2023 21:09:27',
    place: 'Piccadilly Circus - London',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '16/03/2023 16:38:59',
    place: 'Champs-Élysées - Paris',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '08/12/2023 10:27:04',
    place: 'Roma St - Sydney',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '24/05/2023 19:56:33',
    place: 'Paseo de la Reforma - Mexico City',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '12/09/2023 07:42:11',
    place: 'Shibuya Crossing - Tokyo',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '29/11/2023 13:20:59',
    place: 'Alexanderplatz - Berlin',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '07/07/2023 22:08:37',
    place: 'Piazza San Marco - Venice',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '14/10/2023 11:55:21',
    place: 'Syntagma Square - Athens',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '23/08/2023 18:45:09',
    place: 'Red Square - Moscow',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '02/05/2023 15:12:48',
    place: 'Cape Town Waterfront - Cape Town',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '19/03/2023 09:27:36',
    place: 'Brandenburg Gate - Berlin',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '28/09/2023 16:59:15',
    place: 'Golden Gate Bridge - San Francisco',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '06/06/2023 12:07:54',
    place: 'Petronas Towers - Kuala Lumpur',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '13/04/2023 21:34:27',
    place: 'Plaza de Mayo - Buenos Aires',
    anomaly: 'Lorem Ipsum text',
  },
  {
    position: '03',
    name: '04',
    weight: '05',
    symbol: 'Mídia',
    datetime: '21/12/2023 08:45:03',
    place: 'Central Park - New York',
    anomaly: 'Lorem Ipsum text',
  },
];
@Component({
  selector: 'mrt-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = [
    'select',
    'datetime',
    'place',
    'position',
    'weight',
    'name',
    'symbol',
    'anomaly',
    'actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
