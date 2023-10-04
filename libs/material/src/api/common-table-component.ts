import { AfterViewInit, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseNgrxService } from './base-ngrx-service';

@Component({ template: '' })
export class CommonTableComponent<T> {
  data$: Observable<T[]> = this.service.entities$;
  count$: Observable<number> = this.service.count$;
  columns: string[] = [];
  visibleColumns: string[] = [];

  constructor(protected service: BaseNgrxService<T>) {}
}
