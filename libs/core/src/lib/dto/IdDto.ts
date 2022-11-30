import { NumberProperty } from '../property';

export class IDDto {
  @NumberProperty({ minimum: 1 })
  id?: number;
}
