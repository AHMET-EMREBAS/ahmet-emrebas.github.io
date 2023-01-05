import { IdProperty, TextMdProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateCommentDto extends BaseDto {
  @TextMdProperty({})
  comment: string;

  @IdProperty()
  employee: IdDto;

  @IdProperty()
  task: IdDto;
}
