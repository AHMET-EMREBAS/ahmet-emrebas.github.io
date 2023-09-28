import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MultipleSelectInputComponent } from './multiple-select-input/multiple-select-input.component';
import { BooleanInputComponent } from './boolean-input/boolean-input.component';

@NgModule({
  imports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DatePickerComponent,
    MultipleSelectInputComponent,
    BooleanInputComponent,
    FormActionsDirective,
  ],
  exports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DatePickerComponent,
    BooleanInputComponent,
    MultipleSelectInputComponent,
    FormActionsDirective,
  ],
})
export class FormModule {}
