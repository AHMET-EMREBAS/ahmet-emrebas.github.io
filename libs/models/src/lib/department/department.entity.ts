import { Entity } from 'typeorm';
import { NameEntity } from '../shared/name.entity';

@Entity()
export class Department extends NameEntity {}
