import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { Max } from 'class-validator';

export class PaginatorDto {
  @ApiProperty({ type: 'integer', required: false })
  @Expose()
  @Max(100)
  @Transform(({ value }) => parseInt(value) || 20)
  take?: number;

  @ApiProperty({ type: 'integer', required: false })
  @Expose()
  @Transform(({ value }) => parseInt(value) || 0)
  skip?: number;
}
