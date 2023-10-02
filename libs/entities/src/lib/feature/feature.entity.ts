/** Generated by @techbir/gen:entity */

import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
@Entity()
export class Feature extends BaseEntity {
  @Column({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
  @Column({ name: 'value', type: 'string', minLength: 3, maxLength: 400 })
  value?: string;
}
