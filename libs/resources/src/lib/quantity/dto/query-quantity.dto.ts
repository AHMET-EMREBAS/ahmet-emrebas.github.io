import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { quantitySearchables } from '../quantity.searchables';
import { quantityOrderables } from '../quantity.orderables';

@Dto()
export class QueryQuantityDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(quantitySearchables())
  search?: any;

  @Property({ type: 'string', enum: quantityOrderables(), nullable: true })
  orderBy? = 'id';
}
