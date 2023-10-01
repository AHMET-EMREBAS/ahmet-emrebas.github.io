import { BaseEntity, Column, Entity } from '@techbir/core';

@Entity()
export class Quantity extends BaseEntity {
  @Column({ type: 'string', unique: true }) name?: string;
}
