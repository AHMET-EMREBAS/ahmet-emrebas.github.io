import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItem } from '../../api';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'tb-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  /** List items  */
  @Input() data: ListItem[] = [
    { label: 'List item 1', icon: 'info', color: 'primary' },
  ];
}
