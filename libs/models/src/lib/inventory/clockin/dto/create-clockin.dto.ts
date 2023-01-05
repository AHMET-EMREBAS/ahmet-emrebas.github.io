import { IdDto } from '@ae/core/dto';
import { DateProperty, IdProperty } from '@ae/core/property';
export class CreateClockinDto {
  @DateProperty({})
  start: Date;

  @DateProperty({ optional: true })
  end: Date;

  @IdProperty()
  employee: IdDto;
}
