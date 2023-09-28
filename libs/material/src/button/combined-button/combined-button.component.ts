import { Component } from '@angular/core';

import { CommonButtonComponent } from '../common-button';

import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-combined-button',
  standalone: true,
  imports: [MicroModule],

  template: ` <button
    #button
    class="button combined-button  {{ color }} {{ variant }} {{ size }} {{
      borderPosition
    }}"
    (click)="emit()"
    [type]="nativeType"
  >
    <span class="icon" *ngIf="icon">{{ icon }}</span>
    <span *ngIf="label">{{ label }}</span>
  </button>`,
})
export class CombinedButtonComponent extends CommonButtonComponent {}
