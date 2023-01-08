import { ClassConstructor, plainToInstance } from 'class-transformer';
import { GLOBAL_TRANSFORM_OPTIONS } from './global-transform-options';

/**
 * This is for testing data transfer object
 * @param type
 * @param value
 * @returns
 */
export function __plainToInstance(type: ClassConstructor<any>, value: any) {
  return plainToInstance(type, value, GLOBAL_TRANSFORM_OPTIONS);
}
