import { ParamType, UrlParam } from '../property/param.decorator';

export class PaginatorDto {
  @UrlParam({
    type: ParamType.INTEGER,
    default: 20,
    optional: true,
    maximum: 100,
  })
  take: number;

  @UrlParam({
    type: ParamType.INTEGER,
    default: 0,
    optional: true,
  })
  skip: number;
}
