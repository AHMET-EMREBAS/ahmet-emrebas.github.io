/* eslint-disable @angular-eslint/component-selector */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonType, ColorType } from '../api';
import { CommonModule } from '@angular/common';

export type ButtonEvent = { type: 'click'; payload: string };

@Component({
  selector:
    'tb-button,button[tb-basic-button],button[tb-raised-button],button[tb-stroked-button],button[tb-flat-button]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="buttonType">
      <button #button (click)="emit()">
        {{ label }}
      </button>
    </ng-container>
    <ng-content></ng-content>
  `,
})
export class ButtonComponent implements AfterViewInit {
  /** @ignore */
  @ViewChild('button') button?: ElementRef<HTMLButtonElement>;

  /** Button label */
  @Input() label = 'Button';

  /** Button type */
  @Input() buttonType?: ButtonType;

  /** Button color */
  @Input() color: ColorType = 'primary';

  /** Click Event  */
  @Output() readonly clickEvent = new EventEmitter<ButtonEvent>();

  constructor(private readonly detection: ChangeDetectorRef) {}
  /** @ignore */
  ngAfterViewInit(): void {
    if (this.buttonType) {
      this.addClass(this.color);

      if (this.buttonType) {
        this.checkAdd(this.buttonType === 'basic', 'basic-button');
        this.checkAdd(this.buttonType === 'flat', 'flat-button');
        this.checkAdd(this.buttonType === 'raised', 'raised-button');
        this.checkAdd(this.buttonType === 'stroked', 'stroked-button');
        this.checkAdd(this.buttonType === 'icon', 'icon-button');
        this.checkAdd(this.buttonType === 'fab', 'fab-button');
        this.checkAdd(this.buttonType === 'mini-fab', 'mini-fab-button');
      }
    }
  }

  /** @ignore */
  private addClass(className: string) {
    this.button?.nativeElement.classList.add(className);
  }

  /** @ignore */
  private checkAdd(condition: boolean, className: string) {
    if (condition) {
      this.addClass(className);
    }
  }

  /** Emit click event */
  emit() {
    this.clickEvent.emit({ type: 'click', payload: this.label });
  }
}
