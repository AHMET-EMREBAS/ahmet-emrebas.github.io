import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { Color, Icon } from '../api';

@Component({
  selector: 'tb-nav-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-list.component.html',
  styles: [],
})
export class NavListComponent {
  componentType = NavListItemComponent;
  @ContentChildren(NavListItemComponent)
  children?: QueryList<NavListItemComponent>;
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
}
