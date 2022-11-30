import { NumberProperty } from '../property';

export class IdDto {
  @NumberProperty({ minimum: 1 })
  id: number;
}
