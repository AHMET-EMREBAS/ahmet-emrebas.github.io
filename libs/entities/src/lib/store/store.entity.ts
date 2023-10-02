/** Generated by @techbir/gen:entity */

import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { PriceLevel } from './../price-level';
@Entity()
export class Store extends BaseEntity {
  @Column({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
  @Relation({
    type: 'ManyToMany',
    eager: true,
    join: true,
    name: 'priceLevel',
    target: PriceLevel,
  })
  priceLevel?: PriceLevel[];
}
