import { TextMdProperty, TextSmProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateTaskDto {
  @TextMdProperty({})
  title: string;

  @TextMdProperty({ optional: true })
  description: string;

  @TextSmProperty({})
  status: string;

  @IdProperty()
  employee: IdDto;
}
