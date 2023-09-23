import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { buttonStyle, ButtonType, ColorType, Icon, Position } from '../api';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../tooltip/tooltip.directive';

export type ButtonEvent = {
  id?: string;
  type: 'click';
  payload: {
    uuid?: string;
    label?: string;
    message?: string;
  };
};

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  template: `
    <button
      #button
      (click)="emitClickEvent()"
      [tbTooltip]="tooltip"
      [tbTooltipPosition]="tooltipPosition"
    >
      <span class="button-label" *ngIf="type !== 'icon-button'">
        {{ label }}
      </span>
      <span class="button-icon icon" *ngIf="type !== 'button'">{{ icon }}</span>
    </button>
  `,
})
export class ButtonComponent implements AfterViewInit {
  /** @ignore */
  @ViewChild('button') button?: ElementRef<HTMLButtonElement>;
  @Input() color: ColorType = 'primary';
  @Input() icon: Icon = 'info';
  @Input() label = 'Button';
  @Input() size: 'small' | 'regular' | 'big' = 'regular';
  @Input() tooltip = '';
  @Input() tooltipPosition: Position = 'top';
  @Input() type: ButtonType = 'button';
  @Input() uuid = 'Id not set!';
  @Input() variant: buttonStyle = 'basic';

  /** Click Event  */
  @Output() readonly clickEvent = new EventEmitter<ButtonEvent>();

  /** @ignore */
  ngAfterViewInit(): void {
    this.addClasses(this.size, this.variant, this.type, this.color);
  }

  /** @ignore */
  private addClasses(...className: string[]) {
    this.button?.nativeElement.classList.add(...className);
  }

  emitClickEvent() {
    this.clickEvent.emit({
      type: 'click',
      payload: {
        label: this.label,
        uuid: this.uuid,
      },
    });
  }
}
