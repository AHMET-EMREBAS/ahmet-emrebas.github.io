import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Optional,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { validateFormDto } from '@techbir/common';
import { ClassConstructor } from '@techbir/utils';

@Component({ template: '' })
export class CommonFormComponent implements AfterViewInit {
  id?: string | undefined;
  defaultValue: any;

  errors = {};
  @Output() submitEvent = new EventEmitter();

  constructor(
    @Optional() @Inject('none') protected readonly dto: ClassConstructor<any>,
    protected readonly activatedRoute: ActivatedRoute
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

  ngAfterViewInit(): void {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id') || undefined;
  }
}
