import { Component } from '@angular/core';
import { CommonTableComponent } from '@techbir/material';
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
  selector: 'tb-message-table',
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
export class MessageTableComponent extends CommonTableComponent<Message> {
  constructor(service: MessageService) {
    super(service);
  }
}
