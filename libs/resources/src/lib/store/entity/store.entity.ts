import { BaseEntity, Column, Entity } from '@techbir/core';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'string', unique: true }) name?: string;
}
