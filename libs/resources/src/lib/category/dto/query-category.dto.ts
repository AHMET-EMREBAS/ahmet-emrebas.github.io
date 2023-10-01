import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { categorySearchables } from '../category.searchables';
import { categoryOrderables } from '../category.orderables';

@Dto()
export class QueryCategoryDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(categorySearchables())
  search?: any;

  @Property({ type: 'string', enum: categoryOrderables(), nullable: true })
  orderBy? = 'id';
}
