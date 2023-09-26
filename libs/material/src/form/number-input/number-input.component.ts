import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-number-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="input-container {{ color }} {{ variant }}">
      <span class="icon"> {{ icon }}</span>
      <label [for]="name">{{ label }} </label>
      <input
        [(ngModel)]="value"
        [id]="name"
        type="number"
        [name]="name"
        [autocomplete]="autocomplete"
        (input)="emit()"
        tbHasValue
      />
      <span class="input-error" *ngIf="error">{{ error }}</span>
    </div>
  `,
})
export class NumberInputComponent extends CommonInputComponent<number> {}
