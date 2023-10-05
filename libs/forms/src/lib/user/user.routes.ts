import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserTableComponent } from './user-table.component';
import { UserFormComponent } from './user-form.component';

export const routesUser: Routes = [
  {
    path: '',
    component: UserComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: UserTableComponent,
        title: 'View User',
      },
      {
        path: 'create',
        component: UserFormComponent,
        title: 'Create User',
      },
      {
        path: 'update/:id',
        component: UserFormComponent,
        title: 'Update User',
      },
    ],
  },
];
