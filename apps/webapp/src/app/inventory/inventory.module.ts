import { NgModule } from '@angular/core';
import {
  ButtonModule,
  MicroModule,
  NavListModule,
  ToolbarComponent,
} from '@techbir/material';
import { InventoryComponent } from './inventory.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryModule, ProductModule } from '@techbir/forms';

@NgModule({
  declarations: [InventoryComponent, NavigationComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    ButtonModule,
    NavListModule,
    RouterModule.forChild([
      {
        path: '',
        component: InventoryComponent,
        children: [
          {
            path: 'product',
            loadChildren: () => ProductModule,
          },
          {
            path: 'category',
            loadChildren: () => CategoryModule,
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
