import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from '../common';
import { EventObject, SharedModule } from '../../api';

@Component({
  selector: 'tb-checkbox-input',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent extends CommonInputComponent {
  override value = false;

  override beforeEmit(event: EventObject): void {
    this.value = !this.value;
    event.payload = { value: this.value };
  }
}
