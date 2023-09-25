/* eslint-disable @angular-eslint/directive-selector */
import { Directive, TemplateRef } from '@angular/core';
import { TabComponent } from './tab.component';

@Directive({ selector: 'tbTab' })
export class TabDirective {
  constructor(public templateRef: TemplateRef<TabComponent>) {}
}
