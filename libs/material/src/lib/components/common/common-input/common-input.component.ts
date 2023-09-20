import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../common/common.component';
import { EventObject } from '@techbir/api';

@Component({
  selector: 'tb-common-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'],
})
export class CommonInputComponent extends CommonComponent {
  /** @ignore store the value  */
  inputValue = '';

  protected override parseEvent(event: Event): EventObject {
    return {
      type: 'input',
      payload: this.inputValue,
    };
  }
}
