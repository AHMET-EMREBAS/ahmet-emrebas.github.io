import { Route } from '@angular/router';
import { SampleModule } from './sample/sample.module';
import { NavigationModule } from './navigation/navigation.module';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => NavigationModule,
  },
  {
    path: 'sample',
    loadChildren: () => SampleModule,
  },
];
