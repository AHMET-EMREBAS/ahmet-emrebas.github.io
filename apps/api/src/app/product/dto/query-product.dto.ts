import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { productSearchables } from '../product.searchables';
import { productOrderables } from '../product.orderables';

@Dto()
export class QueryProductDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(productSearchables())
  query: any;

  @Property({ type: 'string', enum: productOrderables(), nullable: true })
  orderBy = 'id';
}
