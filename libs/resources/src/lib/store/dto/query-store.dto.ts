import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { storeSearchables } from '../store.searchables';
import { storeOrderables } from '../store.orderables';

@Dto()
export class QueryStoreDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(storeSearchables())
  search?: any;

  @Property({ type: 'string', enum: storeOrderables(), nullable: true })
  orderBy? = 'id';
}
