import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colors, Icon } from '../../api';

@Component({
  selector: 'tb-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  /** List item color */
  @Input() color: Colors = 'primary';

  /** List item text */
  @Input() label = '';

  /** List item icon */
  @Input() icon: Icon = 'info';
}
