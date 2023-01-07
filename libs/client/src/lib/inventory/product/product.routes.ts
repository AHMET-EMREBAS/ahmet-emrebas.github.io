import { Routes } from '@angular/router';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductComponent } from './product.component';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductTableComponent,
      },
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'update/:id',
        component: ProductEditorComponent,
      },
    ],
  },
];
