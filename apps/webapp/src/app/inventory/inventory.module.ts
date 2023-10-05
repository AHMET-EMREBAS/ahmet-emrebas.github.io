import { NgModule } from '@angular/core';
import {
  ButtonModule,
  ListComponent,
  ListItemComponent,
  MicroModule,
  NavListModule,
  ToolbarComponent,
} from '@techbir/material';
import { InventoryComponent } from './inventory.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { routesInventory } from './inventory.routes';

@NgModule({
  declarations: [InventoryComponent, NavigationComponent],
  imports: [
    MicroModule,
    ToolbarComponent,
    ButtonModule,
    NavListModule,
    ListComponent,
    ListItemComponent,
    RouterModule.forChild(routesInventory),
  ],
})
export class InventoryModule {}
