import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryPricelevelDto {
  @WhereQueryField()
  name?: FindOperator<any>;
}
