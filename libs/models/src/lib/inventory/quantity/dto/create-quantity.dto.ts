import { IdProperty, PositiveIntegerProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateQuantityDto extends BaseDto {
  @PositiveIntegerProperty({ unique: true })
  quantity: number;

  @IdProperty()
  product: IdDto;

  @IdProperty()
  store: IdDto;
}
