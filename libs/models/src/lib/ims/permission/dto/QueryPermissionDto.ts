import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryPermissionDto {
  @WhereQueryField()
  name?: FindOperator<any>;

  @WhereQueryField()
  description?: FindOperator<any>;
}
