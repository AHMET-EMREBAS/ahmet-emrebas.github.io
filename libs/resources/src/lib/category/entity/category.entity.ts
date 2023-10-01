import { BaseEntity, Column, Entity } from '@techbir/core';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'string', unique: true }) name?: string;
}
