import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { StoreService } from './store.service';
import { Store } from './store';

@Component({
  selector: 'tb-store-table',
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
export class StoreTableComponent extends CommonTableComponent<Store> {
  constructor(service: StoreService) {
    super(service);
  }
}
