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
export class Clockin extends BaseEntity {
  @Column({ type: 'date' })
  start: Date;

  @Column({ type: 'date', nullable: true })
  end: Date;

  @ManyToOne(() => Employee, (e) => e.id, { eager: true })
  @JoinColumn()
  employee: Employee;
}
