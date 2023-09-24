import { Component, Input } from '@angular/core';
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
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
}
