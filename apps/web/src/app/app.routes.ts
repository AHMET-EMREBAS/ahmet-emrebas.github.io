import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ae/client/web/web.module').then((e) => e.WebModule),
  },
];
