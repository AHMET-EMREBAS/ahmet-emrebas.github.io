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
    { label: 'List item 2', icon: 'apps', color: 'secondary' },
    { label: 'List item 3', icon: '10k', color: 'accent' },
    { label: 'List item 4', icon: 'email', color: 'warn' },
    { label: 'List item 5', icon: 'store', color: 'red' },
    { label: 'List item 6', icon: 'house', color: 'black' },
    { label: 'List item 7', icon: '5k', color: 'white' },
  ];
}
