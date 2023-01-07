import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule as PrimeTableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ToolbarModule,
    ReactiveFormsModule,
    PrimeTableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    DialogModule,
    TabViewModule,
    MultiSelectModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
