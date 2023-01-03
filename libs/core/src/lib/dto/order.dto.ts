import { ParamType, UrlParam } from '../property/param.decorator';

export class OrderDto {
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
