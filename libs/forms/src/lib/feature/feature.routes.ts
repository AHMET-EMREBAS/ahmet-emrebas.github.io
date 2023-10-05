import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { FeatureTableComponent } from './feature-table.component';
import { FeatureFormComponent } from './feature-form.component';

export const routesFeature: Routes = [
  {
    path: '',
    component: FeatureComponent,

    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view',
        component: FeatureTableComponent,
        title: 'View Feature',
      },
      {
        path: 'create',
        component: FeatureFormComponent,
        title: 'Create Feature',
      },
      {
        path: 'update/:id',
        component: FeatureFormComponent,
        title: 'Update Feature',
      },
    ],
  },
];
