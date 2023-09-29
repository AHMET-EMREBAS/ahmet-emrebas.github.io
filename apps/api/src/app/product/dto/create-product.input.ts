import { Field, InputType } from '@nestjs/graphql';
import { Product } from '../entity';

@InputType()
export class CreateProductInput implements Product {
  @Field(() => String) name: string;
}
