import { PositiveNumberProperty } from '@ae/core/property/property.decorator';
import { Entity } from 'typeorm';
import { CommonEntity } from '../shared';

@Entity()
export class Price extends CommonEntity {
  @PositiveNumberProperty() price: number;
  @PositiveNumberProperty() cost: number;
}
