import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';

import {
  LayoutToolbarDirective,
  LayoutStatusbarDirective,
  LayoutSidenavDirective,
  LayoutContentDirective,
  ToggleFullscreenDirective,
} from './directives';
import { MobileNavigationComponent } from './mobile-navigation';
import { NavigationComponent } from './navigation';
import { LogoComponent } from '../logo/logo.component';
import { SidenavToggleComponent } from '../sidenav-toggle/sidenav-toggle.component';
import { ToolbarComponent } from '../toolbar';

@NgModule({
  declarations: [
    MobileNavigationComponent,
    NavigationComponent,
    LayoutComponent,
    LayoutToolbarDirective,
    LayoutStatusbarDirective,
    LayoutSidenavDirective,
    LayoutContentDirective,
    ToggleFullscreenDirective,
  ],
  imports: [
    CommonModule,
    LogoComponent,
    SidenavToggleComponent,
    ToolbarComponent,
  ],
  exports: [
    LayoutComponent,
    MobileNavigationComponent,
    NavigationComponent,
    LayoutToolbarDirective,
    LayoutStatusbarDirective,
    LayoutSidenavDirective,
    LayoutContentDirective,
  ],
})
export class LayoutModule {}
