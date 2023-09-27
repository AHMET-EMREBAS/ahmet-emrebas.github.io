import { Component } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { CombinedButtonComponent } from '../../button';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [MicroModule],
  template: `
    <button
      class="nav-list-item {{ color }} {{ variant }} {{ borderPosition }} "
      (click)="emit()"
      [tbBadge]="badge"
      [tbBadgeColor]="badgeColor"
      [tbBadgePosition]="badgePosition"
      [tbTooltip]="tooltip"
      [tbTooltipPosition]="tooltipPosition"
    >
      <span class="icon">{{ icon }}</span>
      <span>{{ label }}</span>
    </button>
  `,
})
export class NavListItemComponent extends CombinedButtonComponent {}
