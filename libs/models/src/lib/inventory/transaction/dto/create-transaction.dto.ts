import { IdProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateTransactionDto extends BaseDto {
  @IdProperty({ each: true })
  orders: IdDto[];
}
