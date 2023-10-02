import { Component } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { CommonInputComponent } from '../common-input/common-input.component';

@Component({
  selector: 'tb-textarea',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div
      class="input-container {{ color }} {{ variant }}"
      [tbTooltip]="error"
      tbTooltipPosition="bottom"
      [class.red]="error"
    >
      <span class="icon"> {{ icon }}</span>
      <label class="label" [for]="name">
        {{ label }}
        <span class="input-error" *ngIf="error">{{ error }}</span>
      </label>
      <textarea
        class="input"
        [(ngModel)]="value"
        [id]="id()"
        [attr.data-testid]="name"
        [name]="name"
        [autocomplete]="autocomplete"
        (input)="emit()"
        tbHasValue
      ></textarea>
    </div>
  `,
})
export class TextareaComponent extends CommonInputComponent {}
