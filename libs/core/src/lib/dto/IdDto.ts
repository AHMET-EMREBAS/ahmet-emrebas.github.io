import { NumberProperty } from '../property';
import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class IDDto {
  @NumberProperty({ minimum: 1 })
  id?: number;
}
