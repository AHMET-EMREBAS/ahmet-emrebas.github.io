import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { Color, Icon } from '../api';

@Component({
  selector: 'tb-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {
  componentType = ListItemComponent;
  @ContentChildren(ListItemComponent) children?: QueryList<ListItemComponent>;

  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
}
