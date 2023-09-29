import { QueryDto, QueryInterface } from '@techbir/core';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsIn, IsOptional } from 'class-validator';
import { ILike } from 'typeorm';

@Exclude()
export class QueryProductDto extends QueryDto implements QueryInterface {
  @Expose()
  @Transform(({ value }) => {
    if (value) {
      return {
        name: ILike(`%${value}%`),
      };
    }
    return undefined;
  })
  @IsOptional()
  query: any;

  @Expose()
  @IsIn(['name', 'id'])
  @IsOptional()
  orderBy = 'id';
}