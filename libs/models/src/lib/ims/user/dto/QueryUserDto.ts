import { WhereQueryField } from '@ae/core';
import { InputType } from '@nestjs/graphql';
import { FindOperator } from 'typeorm';

@InputType()
export class QueryUserDto {
  @WhereQueryField()
  fullName?: FindOperator<any>;

  @WhereQueryField()
  username?: FindOperator<any>;

  @WhereQueryField()
  password?: FindOperator<any>;

  @WhereQueryField()
  phone?: FindOperator<any>;

  @WhereQueryField()
  permissions?: FindOperator<any>;

  @WhereQueryField()
  pricelevel?: FindOperator<any>;
}
