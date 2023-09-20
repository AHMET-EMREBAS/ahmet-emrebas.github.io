import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colors, EventService, StringType, TooltipPosition } from '../../api';

@Component({
  selector: 'tb---common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './_-common.component.html',
  styleUrls: ['./_-common.component.scss'],
})
export class CommonComponent {
  /** Unique name in context. This name is also for event emitter. Any event happened in this component will be fired by this name*/
  @Input() uname = StringType;

  /** Element color */
  @Input() color: Colors = 'primary';

  /** Listen any event in the component. Event name is padded as property of the object. */
  @Output() listen = new EventEmitter();

  /** Help user to understand this element */
  @Input() tooltip = '';

  /** Show tooltip at a specific location. */
  @Input() tooltipPosition: TooltipPosition = 'bottom';

  constructor(protected readonly eventService: EventService) {}

  private createEvent(e: any) {
    return { [this.uname]: e };
  }

  /** Emit element events as they are */
  emit(event: any) {
    const e = this.createEvent(event);
    this.eventService.$events.next(e);
    this.listen.emit(e);
  }
}
