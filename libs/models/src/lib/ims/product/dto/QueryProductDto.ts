import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryProductDto {
  @WhereQueryField()
  name?: FindOperator<any>;

  @WhereQueryField()
  description?: FindOperator<any>;

  @WhereQueryField()
  barcode?: FindOperator<any>;

  @WhereQueryField()
  category?: FindOperator<any>;

  @WhereQueryField()
  price?: FindOperator<any>;

  @WhereQueryField()
  cost?: FindOperator<any>;
}
