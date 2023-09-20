import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colors, TooltipPosition } from '../../api';

@Component({
  selector: 'tb---common',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './_-common.component.html',
  styleUrls: ['./_-common.component.scss'],
})
export class CommonComponent {
  /** Unique name in context */
  @Input() name = 'Undefined';

  /** Element color */
  @Input() color: Colors = 'accent';

  /** EventEmitter */
  @Output() listen = new EventEmitter();

  /** Help user to understand this element */
  @Input() tooltip = '';

  /** Show tooltip at a specific location. */
  @Input() tooltipPosition: TooltipPosition = 'bottom';

  /** Emit element events as they are */
  emit(event: Event) {
    this.listen.emit(event);
  }
}
