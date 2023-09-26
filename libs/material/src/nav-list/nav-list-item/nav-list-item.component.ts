import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Icon } from '../../api';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-list-item.component.html',
  styles: [],
})
export class NavListItemComponent {
  /** @ignore */
  @Input()
  @Output()
  clickEvent = new EventEmitter();
  @Input() __ngContext__ = '';
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';

  emitClickEvent() {
    console.log('Emitting click event', this);
    this.clickEvent.emit({});
  }
}
