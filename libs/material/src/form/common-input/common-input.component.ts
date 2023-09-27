import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { Color, Icon, InputType, InputVariant } from '../../api';

@Component({ standalone: true, template: `` })
export class CommonInputComponent<T = any> {
  @Optional()
  @ViewChild('input')
  inputRef!: ElementRef<HTMLInputElement>;

  @Input()
  @Output()
  inputEvent = new EventEmitter<T>();

  @Input() __ngContext__ = '';

  @Input() formName?: string;

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

  id() {
    return `${this.formName}-${this.name}-${this.inputType}`;
  }
}
