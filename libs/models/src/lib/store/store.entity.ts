import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PriceLevel } from '../price-level/price-level.entity';
import { NameEntity } from '../shared';

@Entity()
export class Store extends NameEntity {
  @ManyToOne(() => PriceLevel, (p) => p.id, { eager: true })
  @JoinColumn()
  priceLevel: PriceLevel;
}
