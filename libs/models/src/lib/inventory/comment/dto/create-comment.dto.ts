import { TextMdProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateCommentDto {
  @TextMdProperty({})
  comment: string;

  @IdProperty()
  employee: IdDto;

  @IdProperty()
  task: IdDto;
}
