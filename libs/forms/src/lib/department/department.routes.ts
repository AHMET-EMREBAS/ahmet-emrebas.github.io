import { Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { DepartmentTableComponent } from './department-table.component';
import { DepartmentFormComponent } from './department-form.component';

export const routesDepartment: Routes = [
  {
    path: '',
    component: DepartmentComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: DepartmentTableComponent,
        title: 'View Department',
      },
      {
        path: 'create',
        component: DepartmentFormComponent,
        title: 'Create Department',
      },
      {
        path: 'update/:id',
        component: DepartmentFormComponent,
        title: 'Update Department',
      },
    ],
  },
];
