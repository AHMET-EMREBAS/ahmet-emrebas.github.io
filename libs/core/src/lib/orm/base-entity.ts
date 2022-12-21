import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BooleanColumn, UUIDColumn } from './column.decorator';
import { IBaseEntity } from '@ae/common/common';

@Entity()
export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @UUIDColumn() uuid: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @DeleteDateColumn() deletedAt: Date;
  @BooleanColumn() active: boolean;
}
