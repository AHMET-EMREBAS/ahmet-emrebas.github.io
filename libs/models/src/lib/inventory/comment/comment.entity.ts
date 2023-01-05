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
import { Task } from '../task';

@Entity()
export class Comment extends BaseEntity {
  @Column({ type: 'text' })
  comment: string;

  @ManyToOne(() => Employee, (e) => e.id, {})
  @JoinColumn()
  employee: Employee;

  @ManyToOne(() => Task, (e) => e.id, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  task: Task;
}
