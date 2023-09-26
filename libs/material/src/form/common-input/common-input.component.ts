import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Color, Icon, InputVariant } from '../../api';

@Component({ standalone: true, template: `` })
export class CommonInputComponent<T = any> implements AfterViewInit {
  @Output() inputEvent = new EventEmitter<T>();
  @Input() value?: T;
  @Input() name!: string;
  @Input() type?: HTMLInputElement['type'];
  @Input() autocomplete?: HTMLInputElement['autocomplete'];
  @Input() color?: Color;
  @Input() label?: string;
  @Input() variant?: InputVariant;
  @Input() icon?: Icon;
  @Input() error?: string;
  emit() {
    this.inputEvent.emit(this.value);
  }

  ngAfterViewInit(): void {
    if (!this.name) {
      throw new Error('Name is required!');
    }
  }
}
