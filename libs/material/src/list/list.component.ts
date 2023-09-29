import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { Color, Icon } from '../api';

@Component({
  selector: 'tb-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  template: `
    <div class="list">
      <ng-container
        [ngComponentOutlet]="componentType"
        [ngComponentOutletInputs]="{
          label: child.label,
          icon: child.icon || icon,
          color: child.color || color
        }"
        *ngFor="let child of children"
      ></ng-container>
    </div>
  `,
})
export class ListComponent {
  componentType = ListItemComponent;
  @ContentChildren(ListItemComponent) children?: QueryList<ListItemComponent>;

  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
}
