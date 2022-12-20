import { applyDecorators } from '@nestjs/common';
import {
  OneToOne,
  ManyToMany,
  ManyToOne,
  OneToMany,
  RelationOptions,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { ClassConstructor } from '../types/class-contructor';

export type RelationType =
  | 'OneToOne'
  | 'ManyToMany'
  | 'ManyToOne'
  | 'OneToMany';

export function Relation<T extends { id: number }>(
  type: RelationType,
  target: ClassConstructor<T>,
  options: RelationOptions
) {
  if (type === 'ManyToMany') {
    return applyDecorators(
      ManyToMany(
        () => target,
        (t) => t.id,
        options
      ),
      JoinTable()
    );
  }

  if (type === 'ManyToOne') {
    return applyDecorators(
      ManyToOne(
        () => target,
        (t) => t.id,
        options
      ),
      JoinColumn()
    );
  }

  if (type === 'OneToMany') {
    return applyDecorators(
      OneToMany(
        () => target,
        (t) => t.id,
        options
      ),
      JoinTable()
    );
  }

  if (type === 'OneToOne') {
    return applyDecorators(
      OneToOne(
        () => target,
        (t) => t.id,
        options
      )
    );
  }

  throw new Error(`${type} is not match for any realtion decorator!`);
}
