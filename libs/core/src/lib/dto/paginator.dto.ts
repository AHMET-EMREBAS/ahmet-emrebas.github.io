import { Property } from '../property';

export class PaginatorDto {
  @Property({
    type: 'integer',
    minimum: 0,
    maximum: 100,
    isStringInteger: true,
  })
  take?: number;

  @Property({ type: 'integer', minimum: 0, isStringInteger: true })
  skip?: number;
}
