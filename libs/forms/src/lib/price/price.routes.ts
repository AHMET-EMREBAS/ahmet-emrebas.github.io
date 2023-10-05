import { Routes } from '@angular/router';
import { PriceComponent } from './price.component';
import { PriceTableComponent } from './price-table.component';
import { PriceFormComponent } from './price-form.component';

export const routesPrice: Routes = [
  {
    path: '',
    component: PriceComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: PriceTableComponent,
        title: 'View Price',
      },
      {
        path: 'create',
        component: PriceFormComponent,
        title: 'Create Price',
      },
      {
        path: 'update/:id',
        component: PriceFormComponent,
        title: 'Update Price',
      },
    ],
  },
];
