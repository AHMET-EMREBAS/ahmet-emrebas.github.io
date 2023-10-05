import { Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { StoreTableComponent } from './store-table.component';
import { StoreFormComponent } from './store-form.component';

export const routesStore: Routes = [
  {
    path: '',
    component: StoreComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: StoreTableComponent,
        title: 'View Store',
      },
      {
        path: 'create',
        component: StoreFormComponent,
        title: 'Create Store',
      },
      {
        path: 'update/:id',
        component: StoreFormComponent,
        title: 'Update Store',
      },
    ],
  },
];
