import { Component } from '@angular/core';
import { CommonButtonComponent } from '../common-button';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-icon-button',
  standalone: true,
  imports: [MicroModule],
  template: `<button
    class="icon-button  {{ color }} {{ variant }} {{ size }} {{
      borderPosition
    }}"
    (click)="emit()"
    [tbBadge]="badge"
    [tbBadgeColor]="badgeColor"
    [tbBadgePosition]="badgePosition"
    [tbTooltip]="tooltip"
    [tbTooltipPosition]="tooltipPosition"
    [type]="nativeType"
  >
    <span class="icon">{{ icon }}</span>
  </button>`,
})
export class IconButtonComponent extends CommonButtonComponent {}
