import { ObjectTypeOptions, ObjectType as _ObjectType } from '@nestjs/graphql';

export function ObjectType(options?: ObjectTypeOptions) {
  return _ObjectType(options || {});
}
