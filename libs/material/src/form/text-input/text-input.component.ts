import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-text-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="input-container {{ color }} {{ variant }}">
      <span class="icon"> {{ icon }}</span>
      <label [for]="name">{{ label }} </label>
      <input
        [(ngModel)]="value"
        [id]="id()"
        type="text"
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
