import { IdProperty, TextSmProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreatePermissionDto extends BaseDto {
  @TextSmProperty({ unique: true })
  name: string;
}
