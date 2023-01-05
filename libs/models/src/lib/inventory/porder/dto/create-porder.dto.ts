import { IdProperty, NumberProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreatePorderDto extends BaseDto {
  @NumberProperty({})
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
