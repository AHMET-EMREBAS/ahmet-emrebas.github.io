import { BaseEntity } from '@ae/core';
import { Entity, Column } from 'typeorm';

@Entity()
export class Category extends BaseEntity{
  @Column({ type:'text', unique:true })
   category: string
}
