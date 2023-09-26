import {
  Component,
  ContentChildren,
  Input,
  NgModule,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { Color, Icon } from '../api';

@Component({
  selector: 'tb-nav-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-list.component.html',
})
export class NavListComponent {
  componentType = NavListItemComponent;

  @ContentChildren(NavListItemComponent) children?: QueryList<
    Record<string, unknown>
  >;
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
}

@NgModule({
  imports: [NavListComponent, NavListItemComponent],
  exports: [NavListComponent, NavListItemComponent],
})
export class NavListModule {}
