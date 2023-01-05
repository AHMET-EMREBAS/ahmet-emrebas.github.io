import { PositiveIntegerProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateQuantityDto {
  @PositiveIntegerProperty({ unique: true })
  quantity: number;

  @IdProperty()
  product: IdDto;

  @IdProperty()
  store: IdDto;
}
