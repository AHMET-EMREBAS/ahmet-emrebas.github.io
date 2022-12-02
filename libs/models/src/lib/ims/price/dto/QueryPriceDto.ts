import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryPriceDto {
  @WhereQueryField()
  price?: FindOperator<any>;

  @WhereQueryField()
  cost?: FindOperator<any>;

  @WhereQueryField()
  pricelevel?: FindOperator<any>;

  @WhereQueryField()
  product?: FindOperator<any>;
}
