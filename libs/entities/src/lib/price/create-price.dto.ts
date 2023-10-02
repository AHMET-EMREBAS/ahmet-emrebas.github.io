import { Dto, Property, IDDto } from '@techbir/core';
import { PartialType } from '@nestjs/graphql';
import { Product } from './../product';
import { PriceLevel } from './../price-level';
@Dto()
export class CreatePriceDto {
  @Property({
    name: 'price',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  price?: number = 0;
  @Property({
    name: 'cost',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  cost?: number = 0;
  @Property({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'product',
    target: IDDto,
  })
  product?: IDDto;
  @Property({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'priceLevel',
    target: IDDto,
  })
  priceLevel?: IDDto;
}