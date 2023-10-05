import { Routes } from '@angular/router';
import { PriceLevelComponent } from './price-level.component';
import { PriceLevelTableComponent } from './price-level-table.component';
import { PriceLevelFormComponent } from './price-level-form.component';

export const routesPriceLevel: Routes = [
  {
    path: '',
    component: PriceLevelComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: PriceLevelTableComponent,
        title: 'View PriceLevel',
      },
      {
        path: 'create',
        component: PriceLevelFormComponent,
        title: 'Create PriceLevel',
      },
      {
        path: 'update/:id',
        component: PriceLevelFormComponent,
        title: 'Update PriceLevel',
      },
    ],
  },
];
