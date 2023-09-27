import { Component, Input } from '@angular/core';

import { CommonButtonComponent } from '../common-button';

import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-combined-button',
  standalone: true,
  imports: [MicroModule],
  template: ` <button
    #button
    class="combined-button  {{ color }} {{ variant }} {{ size }} {{
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
    <span class="icon" *ngIf="icon">{{ icon }}</span>
    <span *ngIf="label">{{ label }}</span>
  </button>`,
  styles: [],
})
export class CombinedButtonComponent extends CommonButtonComponent {}
