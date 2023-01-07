import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

export class BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;
  @Column({ type: 'boolean', default: true }) active: boolean;
  @Column({ type: 'text', nullable: true }) comment: string;
  @Column({
    type: 'uuid',
    update: false,
    transformer: { to: () => v4(), from: (value) => value },
  })
  uuid: string;

  @Column({ type: 'integer', nullable: true }) createdBy: number;
  @Column({ type: 'integer', nullable: true }) updatedBy: number;
  @Column({ type: 'integer', nullable: true }) lastViewedBy: number;
}
