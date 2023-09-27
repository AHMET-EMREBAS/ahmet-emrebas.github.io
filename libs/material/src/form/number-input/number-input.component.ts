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
      <label [for]="id()">{{ label }} </label>
      <input
        [(ngModel)]="value"
        [id]="id()"
        [attr.data-testid]="name"
        type="number"
        [name]="name"
        (input)="emit()"
        tbHasValue
      />
      <span class="input-error" *ngIf="error">{{ error }}</span>
    </div>
  `,
})
export class NumberInputComponent extends CommonInputComponent<number> {}
