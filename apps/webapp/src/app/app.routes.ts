import { Route } from '@angular/router';
import { NavigationModule } from './navigation/navigation.module';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => NavigationModule,
  },
];
