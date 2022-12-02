import { applyDecorators, BadRequestException } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { QueryOperators } from '../query';

@InputType()
export class FieldQueryDto {
  @ApiProperty({ type: 'string', enum: Object.keys(QueryOperators) })
  @Expose()
  @Field(() => String)
  operator: string;

  @ApiProperty({ type: 'string' })
  @Expose()
  @Field(() => String)
  queryString: string;
}

export function WhereQueryField() {
  return applyDecorators(
    ApiProperty({
      type: 'string',
      example: 'contains:querytext',
      description: Object.keys(QueryOperators).join(','),
      required: false,
    }),
    IsOptional(),
    Expose(),
    Field(() => String),
    Transform(({ value }) => {
      if (value.length > 400) {
        throw new BadRequestException(
          'Query string should not contain more than 400 characters.'
        );
      }
      const partial: string = value as string;

      if (partial) {
        const delimeterIndex = partial.indexOf(':');

        if (delimeterIndex) {
          const operator = partial.substring(0, delimeterIndex);
          console.log('Operator: ' + operator);
          const queryString = partial.substring(delimeterIndex + 1);
          console.log('Query String: ' + queryString);

          if (operator && queryString) {
            return QueryOperators[operator](queryString);
          }
          return undefined;
        }
      }
      return undefined;
    })
  );
}
