import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';

import { Resource } from '../../resource';

import { Operation } from '../../operation';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Resource, (e) => e.id, { nullable: true, eager: true })
  @JoinColumn()
  resource: Resource;

  @ManyToOne(() => Operation, (e) => e.id, { nullable: true, eager: true })
  @JoinColumn()
  operation: Operation;

  @ManyToOne(() => Operation, (e) => e.id, { nullable: true, eager: true })
  @JoinColumn()
  oper: Operation;
}
