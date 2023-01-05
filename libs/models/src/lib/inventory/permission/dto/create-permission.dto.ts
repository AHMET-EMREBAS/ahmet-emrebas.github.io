import { TextSmProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreatePermissionDto {
  @TextSmProperty({ unique: true })
  name: string;
}
