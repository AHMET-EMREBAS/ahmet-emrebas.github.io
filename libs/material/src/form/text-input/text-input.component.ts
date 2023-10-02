import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-text-input',
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
      </label>
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
    </div>
  `,
})
export class TextInputComponent extends CommonInputComponent<string> {}
