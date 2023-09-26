import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon } from '../api';
import { ButtonComponent } from '../button';
import { MicroModule } from '../micro/micro.module';
// buttonType="icon-button"
// buttonSize="small"
// buttonStyle="inbox"
// [color]="color"
// icon="close"


@Component({
  selector: 'tb-alert',
  standalone: true,
  imports: [MicroModule, ButtonComponent],
  template: ` <div class=" {{ color }}" role="alert">
    <span class="icon">{{ icon }}</span>
    <span>{{ message }}</span>
    <div class="grow-1"></div>
    <tb-button></tb-button>
  </div>`,
})
export class AlertComponent {
  @Output() closeEvent = new EventEmitter();
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
  @Input() message = 'Message';
  @Input() closable = true;

  emitCloseEvent() {
    this.closeEvent.emit();
  }
}
