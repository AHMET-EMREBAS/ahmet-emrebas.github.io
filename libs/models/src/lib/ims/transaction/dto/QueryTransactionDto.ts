import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryTransactionDto {
  @WhereQueryField()
  cart?: FindOperator<any>;

  @WhereQueryField()
  complete?: FindOperator<any>;
}
