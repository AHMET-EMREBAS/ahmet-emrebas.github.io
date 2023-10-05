import { Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleTableComponent } from './role-table.component';
import { RoleFormComponent } from './role-form.component';

export const routesRole: Routes = [
  {
    path: '',
    component: RoleComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: RoleTableComponent,
        title: 'View Role',
      },
      {
        path: 'create',
        component: RoleFormComponent,
        title: 'Create Role',
      },
      {
        path: 'update/:id',
        component: RoleFormComponent,
        title: 'Update Role',
      },
    ],
  },
];
