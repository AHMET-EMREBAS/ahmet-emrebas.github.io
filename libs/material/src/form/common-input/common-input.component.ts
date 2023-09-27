import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, InputType, InputVariant } from '../../api';

@Component({ standalone: true, template: `` })
export class CommonInputComponent<T = any> {
  @Input()
  @Output()
  inputEvent = new EventEmitter<T>();

  @Input() __ngContext__ = '';
  @Input() inputType?: InputType = 'text';
  @Input() value?: T;
  @Input() name!: string;
  @Input() type?: HTMLInputElement['type'];
  @Input() autocomplete?: HTMLInputElement['autocomplete'];
  @Input() color?: Color = 'primary';
  @Input() label?: string = 'Not set';
  @Input() variant?: InputVariant = 'basic';
  @Input() icon?: Icon = 'info';
  @Input() error?: string;
  @Input() formValue?: Record<string, any>;

  emit() {
    this.inputEvent.emit(this.value);
  }
}
