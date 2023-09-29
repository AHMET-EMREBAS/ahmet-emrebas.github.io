import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { productOrderables } from '../product.orderables';
import { productSearchables } from '../product.searchables';

@Input()
export class QueryProductInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @QueryStringTransformer(productSearchables())
  query: any;

  @Field({ type: 'string', nullable: true, enum: productOrderables() })
  orderBy: string;
}
