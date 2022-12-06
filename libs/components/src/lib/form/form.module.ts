import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, SharedModule],
})
export class FormModule {}
