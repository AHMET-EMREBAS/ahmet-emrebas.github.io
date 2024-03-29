import { Component } from '@angular/core';
import { CommonButtonComponent } from '../common-button';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [MicroModule],
  template: ` <button
    class="button {{ color }} {{ variant }} {{ size }} {{ borderPosition }}"
    [type]="nativeType"
    (click)="emit()"
  >
    {{ label }}
  </button>`,
  styles: [],
})
export class ButtonComponent extends CommonButtonComponent {}
