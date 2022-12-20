import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
/**
 * DTO property
 * @param options
 * @returns
 */
export function Property(options: any) {
  return applyDecorators(Expose(), ApiProperty({ ...(options as any) }));
}
