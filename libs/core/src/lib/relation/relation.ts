import { applyDecorators } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import {
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  RelationOptions,
} from 'typeorm';

export enum RelationType {
  ManyToMany = 'ManyToMany',
  OneToMany = 'OneToMany',
  ManyToOne = 'ManyToOne',
  OneToOne = 'OneToOne',
}

export type RelationMinimalOptions = {
  type: RelationType;
  target: ClassConstructor<any>;
};

/**
 * Establish relations between models
 * @param param RelationMinimalOptions
 * @returns Relation Decorators
 */
export function Relation({ target, type }: RelationMinimalOptions) {
  const options: RelationOptions = { nullable: true };

  switch (type) {
    case RelationType.ManyToMany:
      return applyDecorators(
        ManyToMany(
          () => target,
          (t) => t.id,
          options
        ),
        JoinTable()
      );

    case RelationType.ManyToOne:
      return applyDecorators(
        ManyToOne(
          () => target,
          (t) => t.id,
          options
        ),
        JoinColumn()
      );

    case RelationType.OneToOne:
      return applyDecorators(
        OneToOne(
          () => target,
          (t) => t.id,
          options
        ),
        JoinColumn()
      );

    case RelationType.OneToMany:
      return applyDecorators(
        OneToMany(
          () => target,
          (t) => t.id,
          options
        ),
        JoinColumn()
      );
  }
}
