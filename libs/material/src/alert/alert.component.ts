import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon } from '../api';
import { IconButtonComponent } from '../button';
import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-alert',
  standalone: true,
  imports: [MicroModule, IconButtonComponent],
  template: `<div class=" {{ color }}" role="alert">
    <span class="icon">{{ icon }}</span>
    <span>{{ message }}</span>
    <div class="grow-1"></div>
    <tb-icon-button
      [color]="color"
      icon="close"
      variant="inbox"
      size="small"
      (click)="emitCloseEvent()"
    ></tb-icon-button>
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
