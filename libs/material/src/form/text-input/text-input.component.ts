import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasValueDirective } from '../has-value/has-value.directive';
import { FocusDirective } from '../focus/focus.directive';
import { Color, Icon, InputVariant } from '../../api';

@Component({
  selector: 'tb-text-input',
  standalone: true,
  imports: [CommonModule, HasValueDirective, FocusDirective],
  templateUrl: './text-input.component.html',
  styles: [],
})
export class TextInputComponent {
  @Input() color: Color = 'primary';
  @Input() label = 'Input Label';
  @Input() variant: InputVariant = 'basic';
  @Input() icon: Icon = 'info';
}
