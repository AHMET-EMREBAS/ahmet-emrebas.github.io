import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colors } from '../../api';
@Component({
  selector: 'tb-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon  = 'info';
  @Input() color: Colors = 'primary';
}
