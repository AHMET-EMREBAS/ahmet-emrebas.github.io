import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Icon } from '../../api';

@Component({
  selector: 'tb-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styles: [],
})
export class ListItemComponent {
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon?: Icon  = 'info';
}
