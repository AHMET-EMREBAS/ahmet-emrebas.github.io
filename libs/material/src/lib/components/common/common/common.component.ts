import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AfterEmit,
  Any,
  BeforeEmit,
  Colors,
  EventObject,
  EventService,
  EventType,
  Icon,
  TooltipPosition,
} from '../../../api';

@Component({
  selector: 'tb-common',
  standalone: true,
  template: '',
})
export class CommonComponent implements BeforeEmit, AfterEmit {
  /** Input/Condition/state value will be attached to the event payload  */
  value: Any = '';

  /** Unique name in context. This name is also for event emitter. Any event happened in this component will be fired by this name*/
  @Input() uname = 'Uname not set';

  /** Descriptive text for the element */
  @Input() label = 'Label';

  @Input() icon: Icon = 'info';

  /** Position the icon right or left */
  @Input() iconPosition: 'right' | 'left' = 'left';

  /** Element color */
  @Input() color: Colors = 'primary';

  /** Help user to understand this element */
  @Input() tooltip = '';

  /** Show tooltip at a specific location. */
  @Input() tooltipPosition: TooltipPosition = 'bottom';

  /** Listen any event in the component. Event name is passed as property of the object. */
  @Output() listen = new EventEmitter();

  constructor(protected readonly eventService: EventService) {}

  beforeEmit(event: EventObject) {
    return;
  }

  afterEmit(event: EventObject) {
    return;
  }

  /** Emit element events as they are */
  emit(type: EventType) {
    const event: EventObject = {
      type,
      target: this.uname,
      payload: { value: this.value },
    };
    this.beforeEmit(event);
    this.eventService.$events.next(event);

    this.listen.emit(event);
    this.afterEmit(event);
  }
}
