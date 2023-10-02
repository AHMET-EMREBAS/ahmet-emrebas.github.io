import { ValueTransformer } from 'typeorm';
import { hashSync, genSaltSync } from 'bcryptjs';

export const HashPasswordTransformer: (hash: boolean) => ValueTransformer = (
  hash: boolean
) => ({
  from: (value) => value,
  to: (value) => {
    if (hash) {
      return hashSync(value, genSaltSync(8));
    }
    return value;
  },
});
