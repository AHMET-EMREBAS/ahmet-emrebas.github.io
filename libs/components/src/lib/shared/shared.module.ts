import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { ValidateInputDirective } from './validate-input.directive';

@NgModule({
  declarations: [ValidateInputDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    ButtonModule,
    MultiSelectModule,
    CalendarModule,
  ],
  exports: [ValidateInputDirective],
})
export class SharedModule {}
