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
import { BaseNgrxService } from './base-ngrx-service';
import { catchError, tap } from 'rxjs';

@Component({ template: '' })
export class CommonFormComponent implements AfterViewInit {
  id?: string | undefined;
  defaultValue: any;

  errors = {};
  @Output() submitEvent = new EventEmitter();

  constructor(
    protected readonly service: BaseNgrxService<any>,
    @Optional() @Inject('none') protected readonly dto: ClassConstructor<any>,
    protected readonly activatedRoute: ActivatedRoute
  ) {}

  async submit(event: any) {
    if (this.id) {
      this.service.update({ id: this.id, ...event });
    } else {
      console.log('Adding to remove', event);
      await this.service.add({ id: 90000, ...event });
    }

    this.submitEvent.emit(event);
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
