import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [FormComponent, InputComponent],
  exports: [FormComponent, InputComponent],
})
export class FormModule {}
