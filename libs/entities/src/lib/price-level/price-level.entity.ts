import { Entity, Column, Relation, BaseEntity } from '@techbir/core';
@Entity()
export class PriceLevel extends BaseEntity {
  @Column({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;
}
