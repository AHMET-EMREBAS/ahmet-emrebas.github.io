/* eslint-disable @angular-eslint/directive-selector */
import { Directive, EventEmitter, Input, TemplateRef } from '@angular/core';
import {
  Color,
  Icon,
  Direction,
  ButtonSize,
  ButttonVariant,
  BadgePosition,
} from '../api';
import { CommonButtonComponent } from '../button';
import { NavListItemComponent } from '../nav-list/nav-list-item/nav-list-item.component';

@Directive({ selector: '[tbTab]' })
export class TabDirective
  implements CommonButtonComponent, NavListItemComponent
{
  @Input() clickEvent: EventEmitter<any> = new EventEmitter();

  @Input() __ngContext__ = '';
  @Input() badge?: string;
  @Input() badgeColor?: Color;
  @Input() badgePosition?: BadgePosition;
  @Input() borderPosition?: Direction = 'bottom';
  @Input() color?: Color = 'primary';
  @Input() icon?: Icon = 'info';
  @Input() label?: string = '';
  @Input() nativeType: 'submit' | 'reset' | 'button' = 'button';
  @Input() size?: ButtonSize | undefined = 'regular';
  @Input() tooltip?: string | undefined = '';
  @Input() tooltipPosition?: Direction | undefined;
  @Input() variant?: ButttonVariant | undefined = 'tab';

  constructor(public templateRef: TemplateRef<TabDirective>) {}
  emit(): void {
    this.clickEvent.emit();
  }
}
