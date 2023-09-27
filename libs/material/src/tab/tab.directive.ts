/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input, TemplateRef } from '@angular/core';
import { Color, Icon, Direction } from '../api';

@Directive({ selector: '[tbTab]' })
export class TabDirective {
  @Input() label?: string;
  @Input() icon?: Icon;
  @Input() borderPosition?: Direction;
  @Input() color?: Color;
  constructor(public templateRef: TemplateRef<TabDirective>) {}
}
