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
  selector:
    'tb-button,button[tb-basic-button],button[tb-raised-button],button[tb-stroked-button],button[tb-flat-button],button[tb-basic-icon-button],button[tb-raised-icon-button],button[tb-stroked-icon-button],button[tb-flat-icon-button]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      #button
      class="{{ color }} {{ buttonSize }} {{ buttonType }}"
      (click)="emit()"
    >
      <span class="button-label" *ngIf="buttonType !== 'icon-button'">
        {{ label }}
      </span>
      <span class="icon" *ngIf="buttonType !== 'button'">{{ icon }}</span>
    </button>
  `,
})
export class ButtonComponent implements AfterViewInit {
  /** @ignore */
  @ViewChild('button') button?: ElementRef<HTMLButtonElement>;

  /** Button label */
  @Input() label = 'Button';

  @Input() icon: Icon = 'info';

  /** Button type */
  @Input() buttonType: ButtonType = 'button';

  @Input() buttonSize: 'small' | 'regular' | 'big' = 'regular';

  /** Button style type */
  @Input() buttonStyleType: buttonStyle = 'basic';

  /** Button color */
  @Input() color: ColorType = 'primary';

  /** Click Event  */
  @Output() readonly clickEvent = new EventEmitter<ButtonEvent>();

  /** @ignore */
  ngAfterViewInit(): void {
    this.addClass(this.buttonType);
    this.addClass(this.color);
    this.addClass(this.buttonStyleType);
  }

  /** @ignore */
  private addClass(className: string) {
    this.button?.nativeElement.classList.add(className);
  }

  /** Emit click event */
  emit() {
    this.clickEvent.emit({ type: 'click', payload: this.label });
  }
}
