import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryStoreDto {
  @WhereQueryField()
  name?: FindOperator<any>;

  @WhereQueryField()
  pricelevel?: FindOperator<any>;
}
