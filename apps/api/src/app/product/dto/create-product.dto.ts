import { Exclude, Expose } from 'class-transformer';
import { Product } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength } from 'class-validator';

@Exclude()
export class CreateProductDto implements Product {
  @ApiProperty({ type: 'string', minLength: 3, maxLength: 30 })
  @MinLength(3)
  @MaxLength(30)
  @Expose()
  name: string;
}
