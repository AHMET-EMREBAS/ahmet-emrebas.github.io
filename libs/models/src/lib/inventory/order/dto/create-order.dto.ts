import { PositiveIntegerProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateOrderDto {
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
