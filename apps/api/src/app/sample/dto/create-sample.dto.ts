import { Property } from '@ae/core';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { MaxLength, MinLength } from 'class-validator';

@Exclude()
export class CreateSampleDto {
  @Property({ minLength: 2, maxLength: 30 })
  name: string;
}
