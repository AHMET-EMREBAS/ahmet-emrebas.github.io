import { BaseEntity } from '@ae/core/entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;
}
