import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AfterEmit, BeforeEmit, EventObject } from '../../../api';

@Component({
  selector: 'tb-common-host',
  standalone: true,
  template: '',
})
export class CommonHostComponent<T = any> implements BeforeEmit, AfterEmit {
  /** Listenn any event from host and child */
  @Output() listen = new EventEmitter<EventObject>();

  /** Children data */
  @Input() data?: T;

  emit(event: EventObject) {
    this.listen.emit(event);
  }
  beforeEmit(event: EventObject): void {
    return;
  }
  afterEmit(event: EventObject): void {
    return;
  }
}
