import { IdProperty, PositiveIntegerProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateOrderDto extends BaseDto {
  @PositiveIntegerProperty({})
  quantity: number;

  @IdProperty()
  store: IdDto;

  @IdProperty()
  product: IdDto;

  @IdProperty()
  customer: IdDto;

  @IdProperty()
  employee: IdDto;
}
