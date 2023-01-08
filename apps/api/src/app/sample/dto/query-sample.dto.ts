import { PaginatorDto } from '@ae/core';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { FindOptionsWhere, ILike } from 'typeorm';
import { Sample } from '../entity';

export class QuerySampleDto extends PaginatorDto {
  @ApiProperty({ type: 'string', required: false })
  @Transform(({ value }) => {
    if (!(value?.trim().length > 0)) return {};
    return {
      where: [
        {
          name: ILike(`%${value}%`),
        },
      ],
    };
  })
  @Expose()
  query?: Record<string, FindOptionsWhere<Sample>[]>;
}
