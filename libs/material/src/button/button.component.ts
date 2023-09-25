import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonVariant, ButtonType, Color, Icon, Position } from '../api';
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
      [type]="type"
      #button
      (click)="emitClickEvent()"
      [tbTooltip]="tooltip"
      [tbTooltipPosition]="tooltipPosition"
      [attr.role]="role"
    >
      <span class="icon" *ngIf="type !== 'button'">{{ icon }}</span>
      <span *ngIf="buttonType !== 'icon-button'">
        {{ label }}
      </span>
    </button>
  `,
})
export class ButtonComponent implements AfterViewInit {
  /** @ignore */
  @ViewChild('button') button?: ElementRef<HTMLButtonElement>;
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
  @Input() label = 'Button';
  @Input() size: 'small' | 'regular' | 'big' = 'regular';
  @Input() tooltip?: string;
  @Input() tooltipPosition?: Position;
  @Input() buttonType: ButtonType = 'button';
  @Input() uuid = 'Id not set!';
  @Input() variant: ButtonVariant = 'basic';
  @Input() type?: 'submit' | 'reset' | 'button' = 'button';
  @Input() role?: 'menubar' | 'menuitem' | 'button' = 'button';
  /** Click Event  */
  @Output() readonly clickEvent = new EventEmitter<ButtonEvent>();

  /** @ignore */
  ngAfterViewInit(): void {
    this.addClasses(this.size, this.variant, this.buttonType, this.color);
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
