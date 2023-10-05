import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { GroupService } from './group.service';
import { Group } from './group';

@Component({
  selector: 'tb-group-table',
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
export class GroupTableComponent extends CommonTableComponent<Group> {
  constructor(service: GroupService) {
    super(service);
  }
}
