import { Component } from '@angular/core';
import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-table',
  standalone: true,
  imports: [MicroModule],
  template: `
    <table>
      <thead>
        <tr>
          <th *ngFor="let col of columns">{{ col }}</th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let item of data">
          <td *ngFor="let col of columns">{{ item[col] }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class TableComponent {
  columns: string[] = ['id', 'name'];
  visibleColumns: string[] = ['id', 'name'];
  data: Record<string, any>[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
  ];
}
