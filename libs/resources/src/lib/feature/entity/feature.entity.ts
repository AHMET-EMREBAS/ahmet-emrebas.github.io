import { BaseEntity, Column, Entity } from '@techbir/core';

@Entity()
export class Feature extends BaseEntity {
  @Column({ type: 'string', unique: true }) name?: string;
}
