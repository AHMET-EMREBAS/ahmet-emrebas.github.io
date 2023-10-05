import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductTableComponent } from './product-table.component';
import { ProductFormComponent } from './product-form.component';

export const routesProduct: Routes = [
  {
    path: '',
    component: ProductComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: ProductTableComponent,
        title: 'View Product',
      },
      {
        path: 'create',
        component: ProductFormComponent,
        title: 'Create Product',
      },
      {
        path: 'update/:id',
        component: ProductFormComponent,
        title: 'Update Product',
      },
    ],
  },
];
