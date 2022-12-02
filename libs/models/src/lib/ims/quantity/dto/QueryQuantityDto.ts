import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryQuantityDto {
  @WhereQueryField()
  quantity?: FindOperator<any>;

  @WhereQueryField()
  product?: FindOperator<any>;

  @WhereQueryField()
  store?: FindOperator<any>;
}
