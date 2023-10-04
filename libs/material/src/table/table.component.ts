import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MicroModule } from '../micro/micro.module';
import { PaginatorComponent } from './paginator/paginator.component';
import { PageEvent, SearchEvent, SortEvent } from '../api';
import { SearchInputComponent } from '../form/search-input/search-input.component';

@Component({
  selector: 'tb-table',
  standalone: true,
  imports: [MicroModule, PaginatorComponent, SearchInputComponent],
  template: `
    <tb-search-input></tb-search-input>
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
          (click)="emitRowClick(item)"
        >
          <td *ngFor="let col of columns">{{ item[col] }}</td>
        </tr>
      </tbody>
    </table>
    <tb-paginator
      [itemCount]="count"
      (pageEvent)="emitPageEvent($event)"
    ></tb-paginator>
  `,
})
export class TableComponent {
  @Input() sortBy = 'id';
  @Input() sortDir: 'asc' | 'desc' = 'asc';

  @Input() count = 100;

  @Input() columns: string[] = ['id', 'name'];
  @Input() visibleColumns: string[] = ['id', 'name'];
  @Input() data: any[] = [
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

  @Output() sortEvent = new EventEmitter<SortEvent>();
  @Output() pageEvent = new EventEmitter<PageEvent>();
  @Output() searchEvent = new EventEmitter<SearchEvent>();
  @Output() rowClickEvent = new EventEmitter<any>();

  filteredData = this.data;

  sort(col: string) {
    this.sortBy = col;
    this.sortDir = 'asc';
    this.emitSortEvent({ orderDir: this.sortDir, orderBy: this.sortBy });
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
