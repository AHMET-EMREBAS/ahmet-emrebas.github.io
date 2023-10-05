import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'tb-category-table',
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
export class CategoryTableComponent extends CommonTableComponent<Category> {
  constructor(service: CategoryService) {
    super(service);
  }
}
