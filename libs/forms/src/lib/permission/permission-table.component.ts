import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { PermissionService } from './permission.service';
import { Permission } from './permission';

@Component({
  selector: 'tb-permission-table',
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
export class PermissionTableComponent extends CommonTableComponent<Permission> {
  constructor(service: PermissionService) {
    super(service);
  }
}
