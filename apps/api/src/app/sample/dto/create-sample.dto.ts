import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';

@Exclude()
export class CreateSampleDto {
  @Expose()
  @ApiProperty({ minLength: 2, maxLength: 30 })
  @MinLength(2)
  @MaxLength(30)
  name: string;
}
