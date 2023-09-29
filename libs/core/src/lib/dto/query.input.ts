import { Field, InputType, Int } from '@nestjs/graphql';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsIn, IsOptional, Min } from 'class-validator';

@InputType()
@Exclude()
export class QueryInput {
  @Expose()
  @Field(() => Int)
  @Min(0)
  @IsOptional()
  take = 20;

  @Expose()
  @Field(() => Int)
  @Min(0)
  @IsOptional()
  skip = 0;

  @Expose()
  @Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return {
        [obj.orderBy]: obj.orderDir,
      };
    }
    return undefined;
  })
  @IsOptional()
  order?: any;

  @Expose()
  @Field(() => String)
  @IsIn(['asc', 'desc'])
  @IsOptional()
  orderDir?: 'asc' | 'desc' = 'asc';
}
