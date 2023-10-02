import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BooleanInputComponent } from './boolean-input/boolean-input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DatePickerComponent,
    TextareaComponent,
    BooleanInputComponent,
    FormActionsDirective,
  ],
  exports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DatePickerComponent,
    BooleanInputComponent,
    TextareaComponent,
    FormActionsDirective,
  ],
})
export class FormModule {}
