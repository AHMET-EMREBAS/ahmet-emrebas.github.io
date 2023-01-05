import {
  Entity,
  Column,
  JoinTable,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { Relation, RelationType } from '@ae/core/relations';
import { BaseEntity } from '@ae/core/entity';

import { Permission } from '../permission';

@Entity()
export class Role extends BaseEntity {
  @Column({ type: 'text', unique: true })
  name: string;

  @ManyToMany(() => Permission, (e) => e.id, { eager: true })
  @JoinTable()
  permissions: Permission[];
}
