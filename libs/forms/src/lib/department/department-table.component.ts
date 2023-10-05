import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { DepartmentService } from './department.service';
import { Department } from './department';

@Component({
  selector: 'tb-department-table',
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
export class DepartmentTableComponent extends CommonTableComponent<Department> {
  constructor(service: DepartmentService) {
    super(service);
  }
}
