import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-text-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="input-container {{ color }} {{ variant }}">
      <span class="icon"> {{ icon }}</span>
      <label class="label" [for]="name">{{ label }} </label>
      <input
        class="input"
        [(ngModel)]="value"
        [id]="id()"
        [attr.data-testid]="name"
        [type]="type"
        [name]="name"
        [autocomplete]="autocomplete"
        (input)="emit()"
        tbHasValue
      />
      <span class="input-error" *ngIf="error">{{ error }}</span>
    </div>
  `,
})
export class TextInputComponent extends CommonInputComponent<string> {}
