import { Property } from '@ae/core/property';
import { IDDto } from '@ae/core/orm';

export class CreateCategoryDto {
  @Property({ type: 'String', inputType: 'text', required: true, unique: true })
  name: string;
}
