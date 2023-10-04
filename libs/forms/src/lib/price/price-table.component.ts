import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { PriceService } from './price.service';
import { Price } from './price';

@Component({
  selector: 'tb-price-table',
  template: ` <tb-table
    [columns]="columns || []"
    [visibleColumns]="visibleColumns || []"
    [data]="(data$ | async) || []"
    [count]="(count$ | async) || 0"
    (sortEvent)="handleSortEvent($event)"
    (pageEvent)="handlePageEvent($event)"
    (searchEvent)="handleSearchEvent($event)"
    (rowClickEvent)="handleRowClickEvent($event)"
  ></tb-table>`,
})
export class PriceTableComponent extends CommonTableComponent<Price> {
  constructor(service: PriceService) {
    super(service);
  }
}
