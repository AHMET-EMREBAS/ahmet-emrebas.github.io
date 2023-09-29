import { BaseEntity, Column, Entity } from '@techbir/core';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'varchar', unique: true }) name: string;
}
