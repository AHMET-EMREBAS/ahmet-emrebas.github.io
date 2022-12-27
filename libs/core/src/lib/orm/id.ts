import { Property } from '../property';

export class IDDto {
  @Property({ minimum: 0 })
  id: number;
}
