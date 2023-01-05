import { IdProperty, DateProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateClockinDto extends BaseDto {
  @DateProperty({})
  start: Date;

  @DateProperty({ optional: true })
  end: Date;

  @IdProperty()
  employee: IdDto;
}
