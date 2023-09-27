import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButttonVariant, Color, Direction } from '../../api';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-common-button',
  standalone: true,
  imports: [MicroModule],
  template: ``,
})
export class CommonButtonComponent {
  @Input() tooltip?: string = '';
  @Input() tooltipPosition?: Direction;
  @Input() color?: Color = 'primary';
  @Input() variant?: ButttonVariant = 'basic';
  @Input() size?: ButtonSize = 'regular';
  @Input() borderPosition?: Direction;
  @Input() nativeType: HTMLButtonElement['type'] = 'button';

  @Output() clickEvent = new EventEmitter();

  emit() {
    this.clickEvent.emit();
  }
}
