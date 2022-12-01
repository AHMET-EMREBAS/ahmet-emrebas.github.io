import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UUIDTransformer } from '../transformers';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseEntity {
  @Field(() => Int, { nullable: true }) @PrimaryGeneratedColumn() id?: number;

  @Field(() => String, { nullable: true }) @CreateDateColumn() createdAt?: Date;
  @Field(() => String, { nullable: true }) @UpdateDateColumn() updatedAt?: Date;
  @Field(() => String, { nullable: true }) @DeleteDateColumn() deletedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  @Column({ type: 'boolean', default: true })
  active?: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: 'numeric', transformer: UUIDTransformer })
  uuid?: number;
}
