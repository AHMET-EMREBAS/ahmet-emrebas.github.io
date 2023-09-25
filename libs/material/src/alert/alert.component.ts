import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color, Icon } from '../api';
import { ButtonComponent, ButtonEvent } from '../button';
import { TooltipDirective } from '../tooltip/tooltip.directive';

@Component({
  selector: 'tb-alert',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TooltipDirective],
  template: ` <div class=" {{ color }}" role="alert">
    <span class="icon">{{ icon }}</span>
    <span>{{ message }}</span>
    <div class="grow-1"></div>
    <tb-button
      buttonType="icon-button"
      buttonSize="small"
      buttonStyleType="inbox"
      [color]="color"
      icon="close"
    ></tb-button>
  </div>`,
})
export class AlertComponent {
  /** Close event */
  @Output() closeEvent = new EventEmitter<ButtonEvent>();
  /** Alert color */
  @Input() color: Color = 'primary';

  /** Alert icon */
  @Input() icon: Icon = 'info';

  /** Alert message */
  @Input() message = 'Message';

  @Input() closable = true;

  close() {
    this.closeEvent.emit({
      type: 'click',
      payload: {
        label: 'Closed alert',
      },
    });
  }
}
