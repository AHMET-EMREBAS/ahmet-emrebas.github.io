import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from '../common';

@Component({
  selector: 'tb-checkbox-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent extends CommonInputComponent {
  override emit(__event: Event): void {
    this.inputValue = !this.inputValue;
    super.emit(__event);
  }
}
