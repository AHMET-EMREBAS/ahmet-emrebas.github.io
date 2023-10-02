import { ValueTransformer } from 'typeorm';
import { v4 } from 'uuid';
export const UUIDTransformer: (uuid: boolean) => ValueTransformer = (
  uuid: boolean
) => ({
  from: (value) => value,
  to: (value) => {
    if (uuid) {
      return v4();
    }
    return value;
  },
});
