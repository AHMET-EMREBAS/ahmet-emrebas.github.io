import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'techbir-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @ContentChildren(ListItemComponent)
  children!: QueryList<ListItemComponent>;

  listItemComponent = ListItemComponent;
}
