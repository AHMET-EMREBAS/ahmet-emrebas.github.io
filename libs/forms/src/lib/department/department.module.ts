import { NgModule } from '@angular/core';
import { DepartmentFormComponent } from './department-form.component';
import { DepartmentTableComponent } from './department-table.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentService } from './department.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
} from '@techbir/material';

const routes: Routes = [
  { path: '', component: DepartmentTableComponent },
  {
    path: 'create',
    component: DepartmentFormComponent,
  },
  {
    path: 'update/:id',
    component: DepartmentFormComponent,
  },
];

@NgModule({
  declarations: [DepartmentFormComponent, DepartmentTableComponent],
  imports: [
    MicroModule,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routes),
  ],
  providers: [DepartmentService],
})
export class DepartmentModule {}
