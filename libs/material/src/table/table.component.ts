import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MicroModule } from '../micro/micro.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { PageEvent, SortEvent } from '../api';

@Component({
  selector: 'tb-table',
  standalone: true,
  imports: [MicroModule, PaginatorComponent],
  template: `
    <table class="table" border="0">
      <thead class="table-header">
        <tr class="table-header-row">
          <th *ngFor="let col of columns" (click)="sort(col)">{{ col }}</th>
        </tr>
      </thead>

      <tbody class="table-body">
        <tr
          *ngFor="let item of data"
          class="table-body-row"
          (click)="emitRowClick(data)"
        >
          <td *ngFor="let col of columns">{{ item[col] }}</td>
        </tr>
      </tbody>
    </table>
    <tb-paginator
      [itemCount]="itemCount"
      (pageEvent)="emitPageEvent($event)"
    ></tb-paginator>
  `,
  styles: [],
})
export class TableComponent {
  @Input() itemCount = 100;

  @Output() sortEvent = new EventEmitter();
  @Output() pageEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  @Output() rowClickEvent = new EventEmitter();

  @Input() columns: string[] = ['id', 'name'];
  @Input() visibleColumns: string[] = ['id', 'name'];
  @Input() data: Record<string, any>[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Orange' },
    { id: 6, name: 'Orange' },
    { id: 7, name: 'Orange' },
    { id: 8, name: 'Orange' },
    { id: 9, name: 'Orange' },
    { id: 10, name: 'Orange' },
    { id: 11, name: 'Orange' },
    { id: 12, name: 'Orange' },
  ];

  filteredData = this.data;

  sort(col: string) {
    //
  }

  emitSortEvent(event: SortEvent) {
    this.sortEvent.emit(event);
  }

  emitPageEvent(event: PageEvent) {
    this.pageEvent.emit(event);
  }

  emitRowClick(rowData: any) {
    this.rowClickEvent.emit(rowData);
  }
}
