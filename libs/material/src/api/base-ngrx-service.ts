import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { PageEvent, SearchEvent, SortEvent } from './types';

export class BaseNgrxService<T> extends EntityCollectionServiceBase<T> {
  __columns: (keyof T)[] = [];
  __visibleColumns: (keyof T)[] = [];

  constructor(
    entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }

  columns() {
    return this.__columns;
  }
  visibleColumns() {
    return this.__visibleColumns;
  }

  handleSortEvent(event: SortEvent) {
    console.log('handleSortEvent', event);
  }

  handlePageEvent(event: PageEvent) {
    console.log('handlePageEvent', event);
  }

  handleSearchEvent(event: SearchEvent) {
    console.log('handleSearchEvent', event);
  }

  handleRowClick(event: any) {
    console.log('handleRowClick', event);
  }
}
