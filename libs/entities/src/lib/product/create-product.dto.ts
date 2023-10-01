import { Dto, Property, IDDto } from '@techbir/core';

@Dto()
export class CreateProductDto {
  @Property({
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
  })
  name!: string;

  @Property({
    name: 'description',
    type: 'string',
    minLength: 3,
    maxLength: 400,
  })
  description?: string;

  @Property({ name: 'upc', type: 'string', minLength: 11, maxLength: 13 })
  upc?: string;
  
  @Property({
    type: 'ManyToOne',
    name: 'category',
    target: IDDto,
    eager: true,
    join: true,
  })
  category?: IDDto;
}
