import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeDirective } from './badge/badge.directive';
import { FocusDirective } from './focus/focus.directive';
import { ScrollDirectionDirective } from './scroll-direction/scroll-direction.directive';
import { SetAttributeDirective } from './set-attribute/set-attribute.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { SetComponentAttributeDirective } from './set-component-attribute/set-component-attribute.directive';
import { ClassListDirective } from './class-list/class-list.directive';

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
  ],
  exports: [
    CommonModule,
    BadgeDirective,
    FocusDirective,
    ScrollDirectionDirective,
    SetAttributeDirective,
    SetComponentAttributeDirective,
    TooltipDirective,
    ClassListDirective
  ],
})
export class MicroModule {}
