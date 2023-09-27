import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  BadgePosition,
  ButtonSize,
  ButttonVariant,
  Color,
  Direction,
} from '../../api';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-common-button',
  standalone: true,
  imports: [MicroModule],
  template: ``,
})
export class CommonButtonComponent {
  /** @ignore */

  @ViewChild('button') ref?: ElementRef<HTMLButtonElement>;

  @Input() __ngContext__ = '';
  @Input() badge?: string;
  @Input() badgeColor?: Color;
  @Input() badgePosition?: BadgePosition;
  @Input() borderPosition?: Direction;
  @Input() color?: Color = 'primary';
  @Input() icon?: string;
  @Input() label?: string;
  @Input() nativeType: HTMLButtonElement['type'] = 'button';
  @Input() size?: ButtonSize = 'regular';
  @Input() tooltip?: string = '';
  @Input() tooltipPosition?: Direction;
  @Input() variant?: ButttonVariant = 'basic';
  /** Only supported by tab variant */

  @Input()
  @Output()
  clickEvent = new EventEmitter();

  emit() {
    this.clickEvent.emit();
  }
}
