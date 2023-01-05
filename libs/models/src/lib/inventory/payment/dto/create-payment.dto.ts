import { IdProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreatePaymentDto extends BaseDto {
  @IdProperty({ each: true })
  orders: IdDto[];
}
