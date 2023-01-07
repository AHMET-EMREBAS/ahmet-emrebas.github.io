import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    ToolbarModule,
    ButtonModule,
    BadgeModule,
    BreadcrumbModule,
    AvatarModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
