import { Property } from '../property';

export class PaginatorDto {
  @Property({
    type: 'number',
    required: false,
  })
  take: number;

  @Property({
    type: 'number',
    required: false,
  })
  skip: number;
}
// deleted: true;

// order?: string;

// desc?: true;

// nullsOrder?: string;

// select: (keyof T & string)[];
