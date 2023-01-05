import { PositiveIntegerProperty } from '../property/property.decorator';

export class IdDto {
  @PositiveIntegerProperty({ optional: false })
  id: number;
}
