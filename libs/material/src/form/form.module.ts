import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';

@NgModule({
  imports: [FormComponent, InputComponent, FormActionsDirective],
  exports: [FormComponent, InputComponent, FormActionsDirective],
})
export class FormModule {}
