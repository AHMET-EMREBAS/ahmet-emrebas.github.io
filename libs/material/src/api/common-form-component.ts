import {
  Component,
  EventEmitter,
  Inject,
  Optional,
  Output,
} from '@angular/core';
import { validateFormDto } from '@techbir/common';
import { ClassConstructor } from '@techbir/utils';

@Component({ template: '' })
export class CommonFormComponent {
  errors = {};
  @Output() submitEvent = new EventEmitter();
  constructor(
    @Optional() @Inject('none') protected readonly dto: ClassConstructor<any>
  ) {}

  submit(event: any) {
    if (this.validate(event)) {
      this.submitEvent.emit(event);
    }
  }

  validate(event: any) {
    const error = validateFormDto(this.dto, event);
    if (error) {
      Object.assign(this.errors, error);
      return false;
    } else {
      this.errors = {};
      return true;
    }
  }
}
