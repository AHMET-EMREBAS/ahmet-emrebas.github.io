/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input, TemplateRef } from '@angular/core';

import { Color, Icon } from '../api';

export class TabInputs {
  label = '';
  color: Color = 'primary';

  constructor(obj: Partial<TabInputs>) {
    Object.assign(this, obj);
  }
}

@Directive({ selector: '[tbTab]' })
export class TabDirective implements TabInputs {
  /** @ignore */
  @Input() __ngContext__ = '';
  @Input() label = '';
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';

  constructor(public templateRef: TemplateRef<TabInputs>) {}
}
