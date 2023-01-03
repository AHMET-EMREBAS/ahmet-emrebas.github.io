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
  ManyToOne = 'ManyToOne',
  OneToMany = 'OneToMany',
  OneToOne = 'OneToOne',
}

export interface EntityRelationOptions extends RelationOptions {
  type: RelationType;
}

export function Relation(
  target: ClassConstructor<any>,
  options: EntityRelationOptions
) {
  switch (options.type) {
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
        )
      );
  }
}
