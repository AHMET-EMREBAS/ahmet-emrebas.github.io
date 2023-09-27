import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { EnumInputComponent } from './enum-input/enum-input.component';

@NgModule({
  imports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DateInputComponent,
    EnumInputComponent,
    FormActionsDirective,
  ],
  exports: [
    FormComponent,
    InputComponent,
    TextInputComponent,
    DateInputComponent,
    EnumInputComponent,
    FormActionsDirective,
  ],
})
export class FormModule {}
