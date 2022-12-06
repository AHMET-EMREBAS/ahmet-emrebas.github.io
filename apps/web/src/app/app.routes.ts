import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@ae/client/ims/product/product.module').then(
        (e) => e.ProductModule
      ),
  },
];
