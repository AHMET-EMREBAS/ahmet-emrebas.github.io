import { Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';

export const INVENTORY_ROUTES: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
];
