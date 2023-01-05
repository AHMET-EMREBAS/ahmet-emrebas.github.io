import { TextSmProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateTagDto {
  @TextSmProperty({ unique: true })
  name: string;
}
