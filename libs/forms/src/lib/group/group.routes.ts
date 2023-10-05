import { Routes } from '@angular/router';
import { GroupComponent } from './group.component';
import { GroupTableComponent } from './group-table.component';
import { GroupFormComponent } from './group-form.component';

export const routesGroup: Routes = [
  {
    path: '',
    component: GroupComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: GroupTableComponent,
        title: 'View Group',
      },
      {
        path: 'create',
        component: GroupFormComponent,
        title: 'Create Group',
      },
      {
        path: 'update/:id',
        component: GroupFormComponent,
        title: 'Update Group',
      },
    ],
  },
];
