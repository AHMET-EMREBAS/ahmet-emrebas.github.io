import { ValueTransformer } from 'typeorm';
import { hash } from '../utils';

/**
 * Transform the property value into hash string
 * @returns
 */
export function PasswordTransformer(): ValueTransformer {
  return {
    from: async (value: string) => await hash(value),
    to: (value: string) => value,
  };
}
