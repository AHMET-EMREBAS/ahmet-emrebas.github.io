import { ParamType, UrlParam } from '../property';

export class QueryDto {
  @UrlParam({
    type: ParamType.NUMBER,
    default: 20,
    optional: true,
    maximum: 100,
  })
  take: number;

  @UrlParam({
    type: ParamType.NUMBER,
    default: 0,
    optional: true,
  })
  skip: number;

  @UrlParam({
    type: ParamType.STRING,
    default: 'asc',
    optional: true,
    enum: ['asc', 'desc'],
  })
  orderDirection: string;

  @UrlParam({
    type: ParamType.STRING,
    default: 'id',
    optional: true,
    enum: [
      'name',
      'id',
      'category',
      'department',
      'price',
      'cost',
      'store',
      'upc',
      'barcode',
      'firstName',
      'lastName',
      'email',
      'username',
      'createdAt',
      'updatedAt',
      'deletedAt',
      'uuid',
      'alt',
      'title',
    ],
  })
  orderProperty: string;
}
