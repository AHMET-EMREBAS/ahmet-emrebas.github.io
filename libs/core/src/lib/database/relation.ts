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
  targetProperty?: string;
  join?: boolean;
};

/**
 * Establish relations between models
 * @param param RelationMinimalOptions
 * @returns Relation Decorators
 */
export function Relation(relationOptions: RelationMinimalOptions) {
  const options: RelationOptions = { nullable: true };
  const { target, type, targetProperty, join } = relationOptions;

  const propertyPicker = (t) => t[targetProperty || 'id'];
  const targetPicker = () => target;

  switch (type) {
    case RelationType.ManyToMany:
      return applyDecorators(
        ManyToMany(targetPicker, propertyPicker, options),
        join && JoinTable()
      );

    case RelationType.ManyToOne:
      return applyDecorators(
        ManyToOne(targetPicker, propertyPicker, options),
        join && JoinColumn()
      );

    case RelationType.OneToOne:
      return applyDecorators(
        OneToOne(targetPicker, propertyPicker, options),
        join && JoinColumn()
      );

    case RelationType.OneToMany:
      return applyDecorators(
        OneToMany(targetPicker, propertyPicker, options),
        join && JoinColumn()
      );
  }
}
