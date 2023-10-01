import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
import { Product } from './../product';
import { PriceLevel } from './../price-level';
@Entity()
export class Price extends BaseEntity {
  @Column({
    name: 'price',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  price?: number = 0;
  @Column({
    name: 'cost',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  cost?: number = 0;
  @Relation({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'product',
    target: Product,
  })
  product?: Product;
  @Relation({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'priceLevel',
    target: PriceLevel,
  })
  priceLevel?: PriceLevel;
}
