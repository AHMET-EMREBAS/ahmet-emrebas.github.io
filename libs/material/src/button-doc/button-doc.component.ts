import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button/button.component';

@Component({
  selector: 'tb-button-doc',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <tb-button
      buttonType="raised"
      color="primary"
      [label]="label + ' ' + clickCounter"
      (clickEvent)="handleEvent($event)"
    ></tb-button>
  `,
  styles: [
    `
      pre {
        font-size: 0.7em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDocComponent {
  @Output() clickEvent = new EventEmitter<ButtonEvent>();

  @Input() label = 'Button';
  @Input() clickCounter = 0;

  constructor(private readonly changeDetection: ChangeDetectorRef) {}

  handleEvent(event: ButtonEvent) {
    this.clickCounter += 1;
    this.changeDetection.detectChanges();
    this.clickEvent.emit(event);
  }
}
