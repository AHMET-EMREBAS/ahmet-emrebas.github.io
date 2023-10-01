import {
  Dto,
  Property,
  QueryDto,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';

import { featureSearchables } from '../feature.searchables';
import { featureOrderables } from '../feature.orderables';

@Dto()
export class QueryFeatureDto extends QueryDto implements QueryInterface {
  @Property({ type: 'string', maxLength: 30, nullable: true })
  @QueryStringTransformer(featureSearchables())
  search?: any;

  @Property({ type: 'string', enum: featureOrderables(), nullable: true })
  orderBy? = 'id';
}
