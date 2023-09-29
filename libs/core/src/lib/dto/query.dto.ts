import { Exclude, Expose, Transform } from 'class-transformer';
import { Min, IsIn, IsOptional } from 'class-validator';

@Exclude()
export class QueryDto {
  @Expose()
  @Min(0)
  @IsOptional()
  take = 20;

  @Expose()
  @Min(0)
  @IsOptional()
  skip = 0;

  @Expose()
  @IsOptional()
  orderBy?: string;

  @Expose()
  @IsIn(['asc', 'desc'])
  @IsOptional()
  orderDir?: 'asc' | 'desc' = 'asc';
  
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
}
