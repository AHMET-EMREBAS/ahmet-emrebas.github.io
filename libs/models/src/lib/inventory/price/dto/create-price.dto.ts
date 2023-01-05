import { PositiveNumberProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreatePriceDto {
  @PositiveNumberProperty({})
  price: number;

  @PositiveNumberProperty({})
  cost: number;

  @IdProperty()
  product: IdDto;

  @IdProperty()
  priceLevel: IdDto;
}
