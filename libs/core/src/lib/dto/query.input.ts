import { Transform } from 'class-transformer';
import { Input } from '../entities';
import { Field } from '../property';

@Input()
export class QueryInput {
  @Field({ type: 'integer', nullable: true, default: 20 })
  take = 20;

  @Field({ type: 'integer', nullable: true, default: 0 })
  skip = 0;

  @Field({ type: 'string', nullable: true })
  @Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return {
        [obj.orderBy]: obj.orderDir,
      };
    }
    return undefined;
  })
  order?: any;

  @Field({ type: 'string', enum: ['asc', 'desc'] })
  orderDir?: 'asc' | 'desc' = 'asc';
}
