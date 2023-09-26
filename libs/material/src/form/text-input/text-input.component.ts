import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasValueDirective } from '../has-value/has-value.directive';
import { FocusDirective } from '../../micro/focus/focus.directive';
import { Color, Icon, InputVariant } from '../../api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'tb-text-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HasValueDirective,
    FocusDirective,
  ],
  templateUrl: './text-input.component.html',
})
export class TextInputComponent {
  @Output() inputEvent = new EventEmitter<string>();
  @Input() value = '';
  @Input() id = '';
  @Input() name = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() autocomplete: HTMLInputElement['autocomplete'] = 'off';
  @Input() color: Color = 'primary';
  @Input() label = 'Input Label';
  @Input() variant: InputVariant = 'basic';
  @Input() icon: Icon = 'info';

  emitEvent() {
    this.inputEvent.emit(this.value);
  }
}
