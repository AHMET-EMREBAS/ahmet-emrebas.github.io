import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Color,
  Direction,
  Icon,
  InputType,
  InputVariant,
  SelectOption,
} from '../../api';

import { FormValue } from '../../api/form-value';

@Component({ standalone: true, template: `` })
export class CommonInputComponent<T = any> {
  @Input() formValue?: FormValue;

  @Optional()
  @ViewChild('input')
  inputRef!: ElementRef<HTMLInputElement>;

  @Output() inputEvent = new EventEmitter<T>();

  @Input() __ngContext__ = '';

  @Input() formName?: string;
  @Input() inputType?: InputType = 'text';
  @Input() value?: any;
  @Input() name!: string;
  @Input() type?: HTMLInputElement['type'];
  @Input() autocomplete?: HTMLInputElement['autocomplete'];
  @Input() color?: Color = 'primary';
  @Input() label?: string = 'Not set';
  @Input() variant?: InputVariant = 'basic';
  @Input() icon?: Icon = 'info';
  @Input() error?: string;

  @Input() options?: SelectOption[];
  @Input() direction?: Direction = 'bottom';
  @Input() distribution?: 'row' | 'column' = 'column';

  emit() {
    this.formValue?.set(this.name, this.value);
    this.inputEvent.emit(this.value);
  }

  id() {
    return `${this.formName}-${this.name}-${this.inputType}`;
  }
}
