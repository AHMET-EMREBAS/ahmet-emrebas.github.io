import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { AppComponent } from './app/app.component';
import { WebComponent } from './web.component';

@NgModule({
  declarations: [AppComponent, WebComponent],
  imports: [
    CommonModule,
    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    InputTextModule,
    CheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebComponent,
        children: [
          {
            path: '',
            component: AppComponent,
          },
          {
            path: 'inventory',
            loadChildren: () =>
              import('../inventory/inventory.module').then(
                (m) => m.InventoryModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class WebModule {}
