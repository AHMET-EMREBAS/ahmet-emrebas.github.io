import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { CommonInputComponent } from '../common-input/common-input.component';
import { DateInputComponent } from '../date-input/date-input.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { EnumInputComponent } from '../enum-input/enum-input.component';
import { BooleanInputComponent } from '../boolean-input/boolean-input.component';

@Component({
  selector: 'tb-input',
  standalone: true,
  imports: [CommonModule, TextInputComponent],
  templateUrl: './input.component.html',
})
export class InputComponent extends CommonInputComponent {
  __text = TextInputComponent;
  __date = DateInputComponent;
  __number = NumberInputComponent;
  __enum = EnumInputComponent;
  __boolean = BooleanInputComponent;

  inputs(extras?: Record<string, any>): Record<string, any> {
    const { inputRef, __text, __date, __boolean, __enum, __number, ...rest } =
      this;

    return { ...rest, ...extras };
  }

  componentType() {
    if (this.inputType === 'text') {
      return this.__text;
    } else if (this.inputType === 'number') {
      return this.__number;
    } else if (this.inputType === 'date') {
      return this.__date;
    } else if (this.inputType === 'select') {
      return this.__enum;
    }

    return this.__text;
  }
}
