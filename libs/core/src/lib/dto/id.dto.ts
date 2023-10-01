import { Property } from '../property';
import { Dto } from '../entities';

@Dto()
export class IDDto {
  @Property({ name: 'id', type: 'number' })
  id?: number;
}
