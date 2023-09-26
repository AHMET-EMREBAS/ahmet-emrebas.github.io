/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input, TemplateRef } from '@angular/core';

import { Color, Icon } from '../api';


@Directive({ selector: '[tbTab]' })
export class TabDirective  {
  /** @ignore */
  @Input() __ngContext__ = '';
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';

  constructor(public templateRef: TemplateRef<TabDirective>) {}
}
