import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Colors,
  EventObject,
  EventService,
  Icon,
  TooltipPosition,
} from '../../../api';

@Component({
  selector: 'tb---common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './_-common.component.html',
  styleUrls: ['./_-common.component.scss'],
})
export class CommonComponent {
  /** Unique name in context. This name is also for event emitter. Any event happened in this component will be fired by this name*/
  @Input() uname = 'Uname not set';

  /** Descriptive text for the element */
  @Input() label = 'Label';

  @Input() icon: Icon = 'info';

  /** Element color */
  @Input() color: Colors = 'primary';

  /** Help user to understand this element */
  @Input() tooltip = '';

  /** Show tooltip at a specific location. */
  @Input() tooltipPosition: TooltipPosition = 'bottom';

  /** @ignore Listen any event in the component. Event name is padded as property of the object. */
  @Output() listen = new EventEmitter();

  constructor(protected readonly eventService: EventService) {}

  protected parseEvent(event: Event): EventObject {
    return event;
  }

  protected createEvent(event: EventObject) {
    return { [this.uname]: event };
  }

  /** Emit element events as they are */
  emit(__event: Event) {
    const event = this.createEvent(this.parseEvent(__event));
    this.eventService.$events.next(event);
    this.listen.emit(event);
  }
}
