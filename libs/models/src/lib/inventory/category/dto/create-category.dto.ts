import { TextSmProperty } from '@ae/core/property';
export class CreateCategoryDto {
  @TextSmProperty({ unique: true })
  name: string;
}
