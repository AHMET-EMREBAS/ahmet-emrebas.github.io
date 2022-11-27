import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class SingleResourceEntity extends BaseEntity {
  @Column({ type: 'text' })
  name: string;
}
