import { ValueTransformer } from 'typeorm';
import { v4 } from 'uuid';

export const UUIDTransformer: Readonly<ValueTransformer> = {
  from: (value: string) => value,
  to: (value: string) => v4(),
};
