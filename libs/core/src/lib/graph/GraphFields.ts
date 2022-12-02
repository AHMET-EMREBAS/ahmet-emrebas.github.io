import { Field, Float, FieldOptions } from '@nestjs/graphql';
import { IDDto } from '../dto';

export const GraphFields: Readonly<{
  [key: string]: (options: FieldOptions) => PropertyDecorator;
}> = {
  string: (options?: FieldOptions) => Field(() => String, { ...options }),
  number: (options?: FieldOptions) => Field(() => Float, { ...options }),
  date: (options?: FieldOptions) => Field(() => String, { ...options }),
  object: (options?: FieldOptions) => Field(() => IDDto, { ...options }),
  array: (options?: FieldOptions) => Field(() => [IDDto], { ...options }),
  boolean: (options?: FieldOptions) => Field(() => Boolean, { ...options }),
  text: (options?: FieldOptions) => Field(() => String, { ...options }),
  numeric: (options?: FieldOptions) => Field(() => Float, { ...options }),
};
