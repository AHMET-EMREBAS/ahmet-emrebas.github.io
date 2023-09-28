/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Input } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';
import { CommonInputComponent } from '../common-input/common-input.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { NumberInputComponent } from '../number-input/number-input.component';
import { BooleanInputComponent } from '../boolean-input/boolean-input.component';
import { SelectInputComponent } from '../select-input/select-input.component';
import { MultipleSelectInputComponent } from '../multiple-select-input/multiple-select-input.component';
import { MicroModule } from '../../micro/micro.module';

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
  __date = DatePickerComponent;
  __number = NumberInputComponent;
  __select = SelectInputComponent;
  __multi_select = MultipleSelectInputComponent;
  __boolean = BooleanInputComponent;

  inputs(extras?: Record<string, any>): Record<string, any> {
    const {
      inputRef,
      __text,
      __date,
      __boolean,
      __select,
      __multi_select,
      __number,
      ...rest
    } = this;
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
      return this.__select;
    } else if (this.inputType === 'boolean') {
      return this.__boolean;
    } else if (this.inputType === 'multi-select') {
      return this.__multi_select;
    }

    return this.__text;
  }
}
