import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { quantityOrderables } from '../quantity.orderables';
import { quantitySearchables } from '../quantity.searchables';

@Input()
export class QueryQuantityInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @QueryStringTransformer(quantitySearchables())
  search?: any;

  @Field({ type: 'string', nullable: true, enum: quantityOrderables() })
  orderBy?: string;
}
