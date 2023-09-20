import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../common';
import { EventObject } from '../../../api';

@Component({
  selector: 'tb-common-input',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class CommonInputComponent<T = any> extends CommonComponent {
  /** Input value  */
  inputValue: T = '' as any;

  protected override parseEvent(event: Event): EventObject {
    return {
      type: 'input',
      target: this.uname,
      payload: this.inputValue,
    };
  }
}
