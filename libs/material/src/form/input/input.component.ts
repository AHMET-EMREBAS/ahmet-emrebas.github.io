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
  @Input() inputType: InputVariant = 'basic';
  @Input() color: Color = 'primary';
  @Input() label = 'Input Label';
  @Input() variant: InputVariant = 'basic';
  @Input() icon: Icon = 'info';
}
