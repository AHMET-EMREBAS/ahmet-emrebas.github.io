import { ValueTransformer } from 'typeorm';
import { hashSync, genSaltSync } from 'bcryptjs';

export const HashPasswordTransformer: () => ValueTransformer = () => ({
  from: (value) => value,
  to: (value) => {
    if (value) {
      return hashSync(value, genSaltSync(8));
    }
    return value;
  },
});
