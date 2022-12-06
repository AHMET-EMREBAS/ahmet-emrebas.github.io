import { Inject, Injectable, Scope } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IsUniqueSample } from '../validators';
export class CreateSampleDto {
  @ApiProperty({
    type: 'string',
    default: 'Sample name',
    minLength: 3,
    maxLength: 50,
  })
  @IsUniqueSample()
  @Expose()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
}
