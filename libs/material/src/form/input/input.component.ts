import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { Color, Icon, InputVariant } from '../../api';

@Component({
  selector: 'tb-input',
  standalone: true,
  imports: [CommonModule, TextInputComponent],
  templateUrl: './input.component.html',
})
export class InputComponent {
  /** @ignore */
  @Input() __ngContext__: any;
  @Input() id = '';
  @Input() name = '';
  @Input() value = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() autocomplete: HTMLInputElement['autocomplete'] = 'on';
  @Input() color: Color = 'primary';
  @Input() label = 'Input Label';
  @Input() variant: InputVariant = 'basic';
  @Input() icon: Icon = 'info';
  @Input() formValue?: Record<string, any>;

  handleInput(event: any) {
    if (this.formValue) {
      this.formValue[this.name] = event;
    }
  }
}
