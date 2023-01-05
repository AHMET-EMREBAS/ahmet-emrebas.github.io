import { PositiveIntegerProperty } from '../property';

export class IdDto {
  @PositiveIntegerProperty({ optional: false })
  id: number;
}
