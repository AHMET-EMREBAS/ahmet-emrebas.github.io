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
import { ProductFormComponent } from '@techbir/forms';

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
            children: [
              { path: '', component: ProductFormComponent },
              { path: 'create', component: ProductFormComponent },
            ],
          },
        ],
      },
    ]),
  ],
})
export class InventoryModule {}
