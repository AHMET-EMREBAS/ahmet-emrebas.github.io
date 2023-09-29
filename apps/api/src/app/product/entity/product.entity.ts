import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@techbir/core';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'char', unique: true }) name: string;
}
