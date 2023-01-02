import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

export function Property(
  options: ApiPropertyOptions | Partial<HTMLInputElement>
) {
  return applyDecorators(ApiProperty(...(options as any)));
}
