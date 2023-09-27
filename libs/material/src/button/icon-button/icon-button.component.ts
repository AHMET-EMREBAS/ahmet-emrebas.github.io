import { Component, Input } from '@angular/core';
import { CommonButtonComponent } from '../common-button';
import { Icon } from '../../api';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-icon-button',
  standalone: true,
  imports: [MicroModule],
  template: `<button
    class="icon-button  {{ color }} {{ variant }} {{ size }} {{
      borderPosition
    }}"
    [type]="nativeType"
    [tbTooltip]="tooltip"
    [tbTooltipPosition]="tooltipPosition"
    (click)="emit()"
  >
    <span class="icon">{{ icon }}</span>
  </button>`,
})
export class IconButtonComponent extends CommonButtonComponent {
  @Input() icon?: Icon;
}
