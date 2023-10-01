import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { categoryOrderables } from '../category.orderables';
import { categorySearchables } from '../category.searchables';

@Input()
export class QueryCategoryInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @QueryStringTransformer(categorySearchables())
  search?: any;

  @Field({ type: 'string', nullable: true, enum: categoryOrderables() })
  orderBy?: string;
}
