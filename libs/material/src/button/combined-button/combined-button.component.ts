import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonButtonComponent } from '../common-button';
import { Icon } from '../../api';

@Component({
  selector: 'tb-combined-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    class="combined-button  {{ color }} {{ variant }} {{ size }} {{
      borderPosition
    }}"
    [type]="nativeType"
    (click)="emit()"
  >
    <span class="icon" *ngIf="icon">{{ icon }}</span>
    <span *ngIf="label">{{ label }}</span>
  </button>`,
  styles: [],
})
export class CombinedButtonComponent extends CommonButtonComponent {
  @Input() label?: string;
  @Input() icon?: Icon;
}
