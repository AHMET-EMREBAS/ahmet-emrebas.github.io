import {
  Field,
  Input,
  QueryInput,
  QueryInterface,
  QueryStringTransformer,
} from '@techbir/core';
import { priceOrderables } from '../price.orderables';
import { priceSearchables } from '../price.searchables';
import { IsOptional } from 'class-validator';

@Input()
export class QueryPriceInput extends QueryInput implements QueryInterface {
  @Field({ type: 'string', nullable: true })
  @IsOptional()
  @QueryStringTransformer(priceSearchables())
  search?: any;

  @Field({ type: 'string', nullable: true, enum: priceOrderables() })
  orderBy?: string;
}
