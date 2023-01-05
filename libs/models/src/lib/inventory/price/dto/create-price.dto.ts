import { IdProperty, PositiveNumberProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreatePriceDto extends BaseDto {
  @PositiveNumberProperty({})
  price: number;

  @PositiveNumberProperty({})
  cost: number;

  @IdProperty()
  product: IdDto;

  @IdProperty()
  priceLevel: IdDto;
}
