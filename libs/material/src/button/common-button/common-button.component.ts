import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonSize, ButttonVariant, Color, Direction } from '../../api';

@Component({ template: '' })
export class CommonButtonComponent {
  /** @ignore */

  @ViewChild('button') ref?: ElementRef<HTMLButtonElement>;

  @Input() __ngContext__ = '';

  @Input() borderPosition?: Direction;
  @Input() color?: Color = 'primary';
  @Input() icon?: string;
  @Input() label?: string;
  @Input() nativeType: HTMLButtonElement['type'] = 'button';
  @Input() size?: ButtonSize = 'regular';
  @Input() variant?: ButttonVariant = 'basic';
  /** Only supported by tab variant */

  @Input()
  @Output()
  clickEvent = new EventEmitter();

  emit() {
    this.clickEvent.emit();
  }
}
