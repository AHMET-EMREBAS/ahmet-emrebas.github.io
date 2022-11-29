import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UUIDTransformer } from '../transformers';

export class BaseEntity {
  @PrimaryGeneratedColumn() id?: number;
  @CreateDateColumn() createdAt?: Date;
  @UpdateDateColumn() updatedAt?: Date;
  @DeleteDateColumn() deletedAt?: Date;

  @Column({ type: 'boolean', default: true }) active?: boolean;
  @Column({ type: 'numeric', nullable: true }) owner?: number;
  @Column({ type: 'numeric', transformer: UUIDTransformer }) uuid?: number;
}
