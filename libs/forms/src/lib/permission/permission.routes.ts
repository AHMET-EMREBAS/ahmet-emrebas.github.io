import { Routes } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { PermissionTableComponent } from './permission-table.component';
import { PermissionFormComponent } from './permission-form.component';

export const routesPermission: Routes = [
  {
    path: '',
    component: PermissionComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: PermissionTableComponent,
        title: 'View Permission',
      },
      {
        path: 'create',
        component: PermissionFormComponent,
        title: 'Create Permission',
      },
      {
        path: 'update/:id',
        component: PermissionFormComponent,
        title: 'Update Permission',
      },
    ],
  },
];
