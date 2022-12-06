import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { CommonFields } from '@ae/common/common';

export class ResourceService<
  T extends CommonFields
> extends EntityCollectionServiceBase<T> {
  constructor(
    entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }
}
