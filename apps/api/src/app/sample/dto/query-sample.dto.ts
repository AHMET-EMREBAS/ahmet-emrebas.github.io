import { PaginatorDto, Property, WhereQueryTransformer } from '@ae/core';

export class QuerySampleDto extends PaginatorDto {
  @Property({ type: 'string' })
  @WhereQueryTransformer(['name', 'description'])
  where?: Record<string, string>[];
}
