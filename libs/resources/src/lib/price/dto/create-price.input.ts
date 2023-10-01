import { Field, Input } from '@techbir/core';
import { Price } from '../entity';

@Input()
export class CreatePriceInput implements Price {
  @Field({ type: 'number', nullable: true }) price?: number;
  @Field({ type: 'number', nullable: true }) cost?: number;
  @Field({ type: 'number', nullable: true })
  product?: any;
}
