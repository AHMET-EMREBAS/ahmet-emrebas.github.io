import { Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

export class MinimalEntity extends BaseEntity {
  @Column({ type: 'text' })
  name: string;
}
