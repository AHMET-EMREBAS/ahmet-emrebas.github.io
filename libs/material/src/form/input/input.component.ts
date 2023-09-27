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
  text = TextInputComponent;
  date = DateInputComponent;
  number = NumberInputComponent;
  enum = EnumInputComponent;
  boolean = BooleanInputComponent;
  inputs(): Record<string, any> {
    return this;
  }

  componentType() {
    if (this.inputType === 'text') {
      return this.text;
    } else if (this.inputType === 'number') {
      return this.number;
    } else if (this.inputType === 'date') {
      return this.date;
    } else if (this.inputType === 'select') {
      return this.enum;
    }

    return this.text;
  }
}
