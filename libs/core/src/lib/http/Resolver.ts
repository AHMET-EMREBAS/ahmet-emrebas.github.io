import { Resolver as __Resolver } from '@nestjs/graphql';
import { ClassConstructor } from 'class-transformer';

export function Resolver<T>(obj: ClassConstructor<T>) {
  return __Resolver(obj);
}
