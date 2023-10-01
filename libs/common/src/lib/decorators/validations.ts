import { PropertyOptions } from '../types';
import { propertyDecorators } from '@techbir/utils';
export function Validations(o?: PropertyOptions) {
  return propertyDecorators();
}
