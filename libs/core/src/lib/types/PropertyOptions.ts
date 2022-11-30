import { ApiPropertyOptions } from '@nestjs/swagger';
import { InputType } from './InputType';

export interface PropertyOptions<ValueType> extends ApiPropertyOptions {
  required?: boolean | undefined;
  inputType?: InputType;
  type: 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';
  enum?: string[];
  ean?: true;
  phone?: true;
  before?: Date;
  after?: Date;
  email?: true;
  password?: true;
  uuid?: true;
  maximum?: number;
  minimum?: number;
  minLength?: number;
  maxLength?: number;
  default?: ValueType;
}
