import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge/badge.directive';
import { FocusDirective } from './focus/focus.directive';
import { ScrollDirectionDirective } from './scroll-direction/scroll-direction.directive';
import { SetAttributeDirective } from './set-attribute/set-attribute.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { SetComponentAttributeDirective } from './set-component-attribute/set-component-attribute.directive';
import { ClassListDirective } from './class-list/class-list.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { HasValueDirective } from './has-value/has-value.directive';

@NgModule({
  imports: [
    CommonModule,
    BadgeDirective,
    FocusDirective,
    ScrollDirectionDirective,
    SetAttributeDirective,
    TooltipDirective,
    SetComponentAttributeDirective,
    ClassListDirective,
    IconComponent,
    HasValueDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    BadgeDirective,
    FocusDirective,
    ScrollDirectionDirective,
    SetAttributeDirective,
    SetComponentAttributeDirective,
    TooltipDirective,
    ClassListDirective,
    IconComponent,
    HasValueDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MicroModule {}
