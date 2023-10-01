import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { priceSearchables } from '../price.searchables';
import { priceOrderables } from '../price.orderables';

@Dto()
export class QueryPriceDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(priceSearchables())
  search?: any;

  @Property({ type: 'string', enum: priceOrderables(), nullable: true })
  orderBy? = 'id';
}
