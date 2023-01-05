import { IdProperty, TextSmProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateDepartmentDto extends BaseDto {
  @TextSmProperty({ unique: true })
  name: string;
}
