import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Icon } from '../../api';

@Component({
  selector: 'tb-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-item {{ color }}">
      <span class="icon">{{ icon }}</span>
      <span>{{ label }}</span>
    </div>
  `,
})
export class ListItemComponent {
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon?: Icon = 'info';
}
