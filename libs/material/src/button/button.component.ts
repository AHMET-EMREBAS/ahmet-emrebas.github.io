import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonStyle, ButtonType, Color, Icon } from '../api';
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
      (click)="emitClickEvent()"
    >
      <span class="icon" *ngIf="canRenderIcon()">{{ icon }}</span>
      <span *ngIf="canRenderLabel()"> {{ label }} </span>
    </button>
  `,
})
export class ButtonComponent {
  /** @ignore */
  @Input() __ngcontext__ = '';

  /** @ignore */
  @ViewChild('button') buttonRef?: ElementRef<HTMLButtonElement>;

  @Output() readonly clickEvent = new EventEmitter();

  @Input() style: ButtonStyle = 'basic';
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
}
