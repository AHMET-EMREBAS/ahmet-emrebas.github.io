import { BaseEntity, Column, Entity } from '@techbir/core';
import { JoinColumn, ManyToOne } from 'typeorm';
import { Product } from '../../product';

@Entity()
export class Price extends BaseEntity {
  @Column({ type: 'string' }) price?: number;
  @Column({ type: 'string' }) cost?: number;

  @ManyToOne(() => Product, (p) => p.id, { onDelete: 'CASCADE' })
  @JoinColumn()
  product?: any;
}
