import { Property } from '../property';

export class PaginatorDto {
  @Property({
    type: 'number',
    minLength: 1,
    maxLength: 50,
    required: false,
  })
  take: number;

  @Property({
    type: 'number',
    minLength: 1,
    maxLength: 50,
    required: false,
  })
  skip: number;
}
// deleted: true;

// order?: string;

// desc?: true;

// nullsOrder?: string;

// select: (keyof T & string)[];
