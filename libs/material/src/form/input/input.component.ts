import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { CommonInputComponent } from '../common-input/common-input.component';

@Component({
  selector: 'tb-input',
  standalone: true,
  imports: [CommonModule, TextInputComponent],
  templateUrl: './input.component.html',
})
export class InputComponent extends CommonInputComponent {
  @Input() formValue?: Record<string, any>;
}
