/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Input } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';
import { CommonInputComponent } from '../common-input/common-input.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { BooleanInputComponent } from '../boolean-input/boolean-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';

import { MicroModule } from '../../micro/micro.module';
import { TextareaComponent } from '../textarea/textarea.component';

@Component({
  selector: 'tb-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <ng-container *ngComponentOutlet="componentType(); inputs: inputs()">
    </ng-container>
  `,
})
export class InputComponent extends CommonInputComponent {
  __text = TextInputComponent;
  __textarea = TextareaComponent;
  __date = DatePickerComponent;
  __number = NumberInputComponent;
  __select = SelectInputComponent;
  __boolean = BooleanInputComponent;

  inputs(extras?: Record<string, any>): Record<string, any> {
    const {
      inputRef,
      __text,
      __textarea,
      __date,
      __boolean,
      __select,
      __number,
      inputEvent,
      ...rest
    } = this;
    return { ...rest, ...extras };
  }

  componentType() {
    if (this.inputType === 'text') {
      return this.__text;
    } else if (this.inputType == 'textarea') {
      return this.__textarea;
    } else if (this.inputType === 'number') {
      return this.__number;
    } else if (this.inputType === 'date') {
      return this.__date;
    } else if (this.inputType === 'select') {
      return this.__select;
    } else if (this.inputType === 'boolean') {
      return this.__boolean;
    }

    return this.__text;
  }
}
