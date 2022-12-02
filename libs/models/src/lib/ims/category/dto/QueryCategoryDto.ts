import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryCategoryDto {
  @WhereQueryField()
  name?: FindOperator<any>;
}
