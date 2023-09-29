import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MicroModule } from '../micro/micro.module';
import { PaginatorComponent } from './paginator/paginator.component';

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
        <tr *ngFor="let item of data" class="table-body-row">
          <td *ngFor="let col of columns">{{ item[col] }}</td>
        </tr>
      </tbody>
    </table>
    <tb-paginator></tb-paginator>
  `,
  styles: [],
})
export class TableComponent {
  @Output() sortEvent = new EventEmitter();
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
    this.sortEvent.emit(col);
  }
}
