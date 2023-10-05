import { Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryTableComponent } from './category-table.component';
import { CategoryFormComponent } from './category-form.component';

export const routesCategory: Routes = [
  {
    path: '',
    component: CategoryComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: CategoryTableComponent,
        title: 'View Category',
      },
      {
        path: 'create',
        component: CategoryFormComponent,
        title: 'Create Category',
      },
      {
        path: 'update/:id',
        component: CategoryFormComponent,
        title: 'Update Category',
      },
    ],
  },
];
