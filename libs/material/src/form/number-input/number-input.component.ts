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
      <label class="label" [for]="id()">{{ label }} </label>
      <input 
        class="input"
        (input)="emit()"
        [(ngModel)]="value"
        [attr.data-testid]="name"
        [id]="id()"
        [name]="name"
        tbHasValue
        type="number"
      />
      <span class="input-error" *ngIf="error">{{ error }}</span>
    </div>
  `,
})
export class NumberInputComponent extends CommonInputComponent<number> {}
