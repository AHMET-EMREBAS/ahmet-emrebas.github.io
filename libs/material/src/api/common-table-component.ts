import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseNgrxService } from './base-ngrx-service';
import { PageEvent, SearchEvent, SortEvent } from './types';

@Component({ template: '' })
export class CommonTableComponent<T> {
  data$: Observable<T[]> = this.service.entities$;
  count$: Observable<number> = this.service.count$;
  columns: (keyof T)[] = this.service.columns();
  visibleColumns: (keyof T)[] = this.service.visibleColumns();

  constructor(protected service: BaseNgrxService<T>) {}

  handleSortEvent(event: SortEvent) {
    this.service.handleSortEvent(event);
  }

  handlePageEvent(event: PageEvent) {
    this.service.handlePageEvent(event);
  }

  handleSearchEvent(event: SearchEvent) {
    this.service.handleSearchEvent(event);
  }

  handleRowClickEvent(event: any) {
    this.service.handleRowClick(event);
  }
}
