import { IdProperty, TextMdProperty, TextSmProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateTaskDto extends BaseDto {
  @TextMdProperty({})
  title: string;

  @TextMdProperty({ optional: true })
  description: string;

  @TextSmProperty({})
  status: string;

  @IdProperty()
  employee: IdDto;
}
