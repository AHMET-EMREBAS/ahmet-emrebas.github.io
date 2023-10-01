import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { storeOrderables } from '../store.orderables';
import { storeSearchables } from '../store.searchables';

@Input()
export class QueryStoreInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @QueryStringTransformer(storeSearchables())
  search?: any;

  @Field({ type: 'string', nullable: true, enum: storeOrderables() })
  orderBy?: string;
}
