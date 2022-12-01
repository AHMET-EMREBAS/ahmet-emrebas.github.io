import { applyDecorators } from '@nestjs/common';
import {
  Column as __Column,
  ColumnOptions,
  Entity as __Entity,
  JoinColumn,
  JoinTable,
  RelationOptions,
  ViewEntity as __ViewEntity,
  ViewColumn as __ViewColumn,
} from 'typeorm';
import { ObjectType, InputType } from '@nestjs/graphql';
import { GraphFields } from '../graph';
import {
  ManyToOne as __ManyToOne,
  ManyToMany as __ManyToMany,
  OneToOne as __OneToOne,
  OneToMany as __OneToMany,
} from 'typeorm';
import { ClassConstructor } from 'class-transformer';

import { Field } from '@nestjs/graphql';
import { BaseEntity } from '../entity';
import { ViewEntityOptions } from 'typeorm/decorator/options/ViewEntityOptions';
export function Column(columnOptions: ColumnOptions) {
  const ctype: string = (columnOptions.type || 'text') as string;

  const GField = GraphFields[ctype];
  if (!GField) {
    throw new Error(
      `Graphql field type is not added for the type ${columnOptions.type}`
    );
  }

  return applyDecorators(
    GField({
      nullable: !!columnOptions.nullable,
      defaultValue: columnOptions.default,
    }),
    __Column(columnOptions)
  );
}

export function Entity() {
  return applyDecorators(ObjectType({ implements: BaseEntity }), __Entity());
}

export function DTO() {
  return applyDecorators(InputType({ description: 'Dto object' }));
}

export function ManyToOne(
  obj: ClassConstructor<any>,
  options: RelationOptions
) {
  return applyDecorators(
    Field(() => obj, { nullable: true }),
    __ManyToOne(() => obj, { nullable: true, eager: true, ...options }),
    JoinColumn()
  );
}

export function OneToOne(obj: ClassConstructor<any>, options: RelationOptions) {
  return applyDecorators(
    Field(() => obj, { nullable: true }),
    __OneToOne(() => obj, { nullable: true, eager: true, ...options }),
    JoinColumn()
  );
}

export function ManyToMany(
  obj: ClassConstructor<any>,
  options: RelationOptions
) {
  return applyDecorators(
    Field(() => [obj], { nullable: true }),
    __ManyToMany(() => obj, { nullable: true, eager: true, ...options }),
    JoinTable()
  );
}

export function OneToMany(
  obj: ClassConstructor<any>,
  options: RelationOptions
) {
  return applyDecorators(
    Field(() => [obj], { nullable: true }),
    __OneToMany(
      () => obj,
      (t) => t.id,
      { nullable: true, eager: true, ...options }
    ),
    JoinTable()
  );
}

// @ManyToOne(() => Category, { eager: true, nullable: true })
// @JoinColumn()

export function ViewEntity(options: ViewEntityOptions) {
  return applyDecorators(ObjectType(), __ViewEntity(options));
}

export function ViewColumn() {
  return applyDecorators(Field(), __ViewColumn());
}
