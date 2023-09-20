import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventObject } from '../../../api';

@Component({
  selector: 'tb-common-host',
  standalone: true,
  template: '',
})
export class CommonHostComponent<T = any> {
  @Output() listen = new EventEmitter<EventObject>();
  @Input() data?: T;

  emit(event: EventObject) {
    this.listen.emit(event);
  }
}
