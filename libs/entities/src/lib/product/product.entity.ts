import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
import { Category } from './../category';

@Entity()
export class Product extends BaseEntity {
  @Column({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;

  @Column({ name: 'description', type: 'string', minLength: 3, maxLength: 400 })
  description?: string;

  @Column({ name: 'upc', type: 'string', minLength: 11, maxLength: 13 })
  upc?: string;

  @Relation({
    type: 'ManyToOne',
    name: 'category',
    target: Category,
    eager: true,
  })
  category?: Category;
}
