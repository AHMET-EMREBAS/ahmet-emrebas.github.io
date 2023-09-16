import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from '../material';

import {
  LayoutToolbarDirective,
  LayoutStatusbarDirective,
  LayoutSidenavDirective,
  LayoutContentDirective,
  ToggleFullscreenDirective,
} from './directives';
import { MobileNavigationComponent } from './mobile-navigation';
import { NavigationComponent } from './navigation';

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
