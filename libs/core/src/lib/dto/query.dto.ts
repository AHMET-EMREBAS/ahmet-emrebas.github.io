import { Transform } from 'class-transformer';
import { Dto } from '../entities';
import { Property } from '../property';

@Dto()
export class QueryDto {
  @Property({ type: 'integer', default: 20, nullable: true, minimum: 1 })
  take = 20;

  @Property({ type: 'integer', default: 0, nullable: true, minimum: 1 })
  skip = 0;

  @Property({
    type: 'string',
    enum: ['asc', 'desc'],
    nullable: true,
    default: 'asc',
  })
  orderDir?: 'asc' | 'desc' = 'asc';

  @Property({ type: 'string', nullable: true })
  @Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return {
        [obj.orderBy]: obj.orderDir,
      };
    }
    return undefined;
  })
  order?: any;
}
