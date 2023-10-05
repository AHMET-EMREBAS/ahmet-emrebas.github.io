import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { RoleService } from './role.service';
import { Role } from './role';

@Component({
  selector: 'tb-role-table',
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
export class RoleTableComponent extends CommonTableComponent<Role> {
  constructor(service: RoleService) {
    super(service);
  }
}
