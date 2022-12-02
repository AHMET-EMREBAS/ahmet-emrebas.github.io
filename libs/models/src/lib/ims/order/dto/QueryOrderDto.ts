import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryOrderDto {
  @WhereQueryField()
  quantity?: FindOperator<any>;

  @WhereQueryField()
  product?: FindOperator<any>;

  @WhereQueryField()
  cart?: FindOperator<any>;

  @WhereQueryField()
  customer?: FindOperator<any>;
}
