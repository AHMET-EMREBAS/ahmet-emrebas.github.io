import { Route } from '@angular/router';
import { InventoryModule } from './inventory/inventory.module';
import { AuthModule } from './auth/auth.module';
import { WebsiteComponent } from './website/website.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WebsiteComponent,
  },
  {
    path: 'inventory',
    loadChildren: () => InventoryModule,
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule,
  },
];
