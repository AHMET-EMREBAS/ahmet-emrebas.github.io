import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'tb-product-table',
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
export class ProductTableComponent extends CommonTableComponent<Product> {
  constructor(service: ProductService) {
    super(service);
  }
}
