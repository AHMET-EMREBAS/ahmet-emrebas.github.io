import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { featureOrderables } from '../feature.orderables';
import { featureSearchables } from '../feature.searchables';

@Input()
export class QueryFeatureInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @QueryStringTransformer(featureSearchables())
  search?: any;

  @Field({ type: 'string', nullable: true, enum: featureOrderables() })
  orderBy?: string;
}
