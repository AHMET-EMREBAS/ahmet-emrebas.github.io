import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-boolean-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="flex row align-center gap-2em ">
      <input
        class="input"
        [(ngModel)]="value"
        [id]="id()"
        type="checkbox"
        class="w-20px h-20px"
      />
      <label class="label" [for]="id()">{{ label }}</label>
    </div>
  `,
})
export class BooleanInputComponent extends CommonInputComponent {}
