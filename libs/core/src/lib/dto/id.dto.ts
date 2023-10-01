import { Property } from '../property';
import { Dto } from '../entities';

@Dto()
export class IDDto {
  @Property({ type: 'number' })
  id?: number;
}
