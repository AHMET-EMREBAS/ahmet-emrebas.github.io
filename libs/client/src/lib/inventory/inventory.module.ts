import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { InventoryStoreModule } from './inventory-store.module';
import { InventoryComponent } from './inventory.component';
import { INVENTORY_ROUTES } from './inventory.routes';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    InventoryStoreModule,
    RouterModule.forChild(INVENTORY_ROUTES),
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
  ],
})
export class InventoryModule {}
