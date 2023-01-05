import { TextSmProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateStoreDto {
  @TextSmProperty({ unique: true })
  name: string;

  @IdProperty()
  priceLevel: IdDto;
}
