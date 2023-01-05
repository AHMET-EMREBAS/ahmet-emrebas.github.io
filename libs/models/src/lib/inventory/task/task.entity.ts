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

import { Employee } from '../employee';

@Entity()
export class Task extends BaseEntity {
  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text' })
  status: string;

  @ManyToOne(() => Employee, (e) => e.id, { eager: true })
  @JoinColumn()
  employee: Employee;
}
