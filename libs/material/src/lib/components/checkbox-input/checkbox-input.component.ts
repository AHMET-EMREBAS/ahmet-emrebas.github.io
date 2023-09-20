import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from '../common';
import { EventObject } from '../../api';

@Component({
  selector: 'tb-checkbox-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent extends CommonInputComponent {
  @Input() checked = false;

  private toggleValue() {
    this.checked = !this.checked;
  }

  protected override parseEvent(event: Event): EventObject {
    this.toggleValue();
    return { type: event.type, payload: this.checked };
  }
}
