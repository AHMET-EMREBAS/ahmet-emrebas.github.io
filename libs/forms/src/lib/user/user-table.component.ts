import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'tb-user-table',
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
export class UserTableComponent extends CommonTableComponent<User> {
  constructor(service: UserService) {
    super(service);
  }
}
