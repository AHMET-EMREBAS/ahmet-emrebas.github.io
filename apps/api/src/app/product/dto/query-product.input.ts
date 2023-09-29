import { Field, InputType } from '@nestjs/graphql';
import { QueryInput, QueryInterface } from '@techbir/core';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsIn, IsOptional } from 'class-validator';
import { ILike } from 'typeorm';

@InputType()
@Exclude()
export class QueryProductInput extends QueryInput implements QueryInterface {
  @Expose()
  @Field(() => String, { nullable: true })
  @IsOptional()
  @Transform(({ value }) => {
    if (value) {
      return {
        name: ILike(`%${value}%`),
      };
    }
    return undefined;
  })
  query: any;

  @Expose()
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsIn(['name', 'id'])
  orderBy: string;
}
