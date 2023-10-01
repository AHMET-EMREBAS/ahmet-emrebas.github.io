import { Field, Property } from '../property';
import { Dto, Input } from '../entities';

@Dto()
export class IDDto {
  @Property({ name: 'id', type: 'number' })
  id?: number;
}

@Input()
export class IDInput {
  @Field({ name: 'id', type: 'number' })
  id?: number;
}
