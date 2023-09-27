import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Icon } from '../../api';

@Component({
  selector: 'tb-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="icon {{ fill }}" *ngIf="icon">{{ icon }}</span>`,
})
export class IconComponent {
  @Input() icon?: Icon;
  @Input() color?: Color;
  @Input() fill?: 'fill' | '' = '';
}
