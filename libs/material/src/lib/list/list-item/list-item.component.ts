import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { ListIconComponent } from '../list-icon/list-icon.component';
import { ListLabelComponent } from '../list-label/list-label.component';

@Component({
  selector: 'techbir-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @ContentChildren(ListIconComponent)
  icons!: QueryList<Partial<ListIconComponent>>;

  @ContentChildren(ListLabelComponent)
  lables!: QueryList<Partial<ListLabelComponent>>;

  @Input() icon!: QueryList<Partial<ListIconComponent>>;

  @Input() label!: QueryList<Partial<ListLabelComponent>>;

  listIconComponent = ListIconComponent;
  listLabelComponent = ListLabelComponent;

  getLabel() {
    return this.lables?.first?.label || this.label?.first?.label;
  }

  getIcon() {
    return this.icons?.first?.icon || this.icon?.first?.icon;
  }
}
