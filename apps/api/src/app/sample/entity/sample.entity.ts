import { BaseEntity, Column, Entity } from '@ae/core';

@Entity()
export class Sample extends BaseEntity {
  @Column({ type: 'text', nullable: true }) name: string;
}
