import {
  Component,
  ContentChildren,
  Input,
  NgModule,
  QueryList,
} from '@angular/core';

import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { Color, Icon } from '../api';
import { MicroModule } from '../micro/micro.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'tb-nav-list',
  standalone: true,
  imports: [MicroModule, RouterModule],
  template: `
    <div class="nav-list">
      <ng-container *ngFor="let child of children">
        <ng-container
          *ngComponentOutlet="componentType; inputs: childValue(child)"
        ></ng-container>
      </ng-container>
    </div>
  `,
})
export class NavListComponent {
  @Input() __ngContext__ = '';
  @Input() componentType = NavListItemComponent;

  @ContentChildren(NavListItemComponent)
  children?: QueryList<NavListItemComponent>;

  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';

  childValue(child: NavListItemComponent): Record<string, any> {
    const { ref, ...rest } = child;
    return rest;
  }
}

@NgModule({
  imports: [NavListComponent, NavListItemComponent],
  exports: [NavListComponent, NavListItemComponent],
})
export class NavListModule {}
