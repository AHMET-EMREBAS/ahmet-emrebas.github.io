import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material';

import {
  LayoutToolbarDirective,
  LayoutStatusbarDirective,
  LayoutSidenavDirective,
} from './directives';

import { LayoutContentDirective } from './directives/layout-content.directive';

@NgModule({
  declarations: [
    MobileNavigationComponent,
    NavigationComponent,
    LayoutComponent,
    LayoutToolbarDirective,
    LayoutStatusbarDirective,
    LayoutSidenavDirective,
    LayoutContentDirective,
  ],
  imports: [CommonModule, MaterialModule],
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
