import { Entity } from 'typeorm';
import { NameEntity } from '../shared';

@Entity()
export class PriceLevel extends NameEntity {}
