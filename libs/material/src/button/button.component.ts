/* eslint-disable @angular-eslint/component-selector */
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { buttonStyle, ButtonType, ColorType, Icon } from '../api';
import { CommonModule } from '@angular/common';

export type ButtonEvent = { id?: string; type: 'click'; payload: string };

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button #button (click)="emitClickEvent()">
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

  @Input() size: 'small' | 'regular' | 'big' = 'regular';
  @Input() variant: buttonStyle = 'basic';
  @Input() type: ButtonType = 'button';
  @Input() color: ColorType = 'primary';
  @Input() icon: Icon = 'info';
  @Input() label = 'Button';

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
    this.clickEvent.emit({ type: 'click', payload: this.label });
  }
}
