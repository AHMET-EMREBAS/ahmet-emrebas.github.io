import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CommonEntity {
  @Exclude() @PrimaryGeneratedColumn() id: number;
  @Exclude() @CreateDateColumn() createdAt: Date;
  @Exclude() @UpdateDateColumn() updatedAt: Date;
  @Exclude() @DeleteDateColumn() deletedAt: Date;
}
