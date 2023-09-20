import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colors, Icon, Range100 } from '../../api';
@Component({
  selector: 'tb-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  /** Icon name */
  @Input() icon: Icon = 'info';

  /** Icon color */
  @Input() color: Colors = 'primary';

  /** Select face color automatically from bgColor */
  @Input() bgColor: Colors = 'primary';

  /** Icon style fill or flat */
  @Input() fill = false;

  /** icon size within the range of 1 to 100. 1=0.1em 100=10em*/
  @Input() size: Range100 = 18;
}
