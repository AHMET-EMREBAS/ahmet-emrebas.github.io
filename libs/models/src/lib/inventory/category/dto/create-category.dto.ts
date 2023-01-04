import { undefined } from '@ae/core/property';

export class CreateCategoryDto {
  @TextSmProperty({ type: 'text-sm', label: 'Category Name' })
  name: string;
}
