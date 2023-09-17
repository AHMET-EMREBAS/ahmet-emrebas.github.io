import { Route } from '@angular/router';
import { ThemeModule } from '@techbir/material/theme';

export const appRoutes: Route[] = [
  { path: 'theme', loadChildren: () => ThemeModule },
  {
    path: '',
    loadChildren: () =>
      import('./navigation/navigation.module').then((m) => m.NavigationModule),
  },
];
