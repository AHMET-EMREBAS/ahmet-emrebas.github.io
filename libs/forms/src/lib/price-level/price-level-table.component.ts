import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { PriceLevelService } from './price-level.service';
import { PriceLevel } from './price-level';

@Component({
  selector: 'tb-price-level-table',
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
export class PriceLevelTableComponent extends CommonTableComponent<PriceLevel> {
  constructor(service: PriceLevelService) {
    super(service);
  }
}
