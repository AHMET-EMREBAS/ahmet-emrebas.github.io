import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ButttonVariant, ButtonType, Color, Icon, Position } from '../api';
import { MicroModule } from '../micro/micro.module';

export type ButtonSize = 'small' | 'regular' | 'big';
@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [MicroModule],
  template: `
    <button
      #button
      [tbClassList]="this"
      [tbSetAttribute]="{ role: nativeRole, type: nativeType }"
      [tbTooltip]="tooltip"
      [tbTooltipPosition]="tooltipPosition"
      (click)="emitClickEvent()"
    >
      <span class="icon" *ngIf="canRenderIcon()">{{ icon }}</span>
      <span *ngIf="canRenderLabel()"> {{ label }} </span>
    </button>
  `,
})
export class ButtonComponent {
  /** @ignore Button eleemnt ref */
  @ViewChild('button') buttonRef?: ElementRef<HTMLButtonElement>;

  /** Click Event */
  @Output() readonly clickEvent = new EventEmitter();

  /** @ignore */
  @Input() __ngContext__ = '';

  @Input() tooltip = '';
  @Input() tooltipPosition: Position = 'bottom';
  @Input() variant: ButttonVariant = 'basic';
  @Input() type: ButtonType = 'button';
  @Input() color: Color = 'primary';
  @Input() icon: Icon = 'info';
  @Input() label = 'Button';
  @Input() size: ButtonSize = 'regular';
  @Input() nativeRole: HTMLButtonElement['role'] = 'button';
  @Input() nativeType: HTMLButtonElement['type'] = 'button';

  emitClickEvent() {
    this.clickEvent.emit();
  }

  /** should wer render icon? */
  canRenderIcon() {
    const iconButtonTypes: ButtonType[] = ['combined-button', 'icon-button'];
    return iconButtonTypes.includes(this.type);
  }

  /** should we render label? */
  canRenderLabel() {
    const labelButtonTypes: ButtonType[] = [
      'button',
      'tab-button',
      'combined-button',
    ];
    return labelButtonTypes.includes(this.type);
  }

  setInput(key: keyof this, value: any) {
    this[key] = value;
  }
}
