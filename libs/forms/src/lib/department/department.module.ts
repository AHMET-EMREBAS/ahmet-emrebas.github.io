import { NgModule } from '@angular/core';
import { DepartmentFormComponent } from './department-form.component';
import { DepartmentTableComponent } from './department-table.component';
import { RouterModule } from '@angular/router';
import { DepartmentService } from './department.service';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  TableComponent,
  ToolbarComponent,
} from '@techbir/material';
import { DepartmentComponent } from './department.component';
import { routesDepartment } from './department.routes';

@NgModule({
  declarations: [
    DepartmentFormComponent,
    DepartmentTableComponent,
    DepartmentComponent,
  ],
  imports: [
    MicroModule,
    ToolbarComponent,
    FormModule,
    ButtonModule,
    TableComponent,
    RouterModule.forChild(routesDepartment),
  ],
  providers: [DepartmentService],
})
export class DepartmentModule {}
