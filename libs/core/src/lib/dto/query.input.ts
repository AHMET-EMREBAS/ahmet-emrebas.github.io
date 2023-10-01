import { Transform } from 'class-transformer';
import { Input } from '../entities';
import { Field } from '../property';

@Input()
export class QueryInput {
  @Field({ name: 'take', type: 'number', defaultValue: 20 })
  take = 20;

  @Field({ name: 'skip', type: 'number', defaultValue: 0 })
  skip = 0;

  @Field({ name: 'order', type: 'string' })
  @Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return {
        [obj.orderBy]: obj.orderDir,
      };
    }
    return undefined;
  })
  order?: any;

  @Field({ name: 'orderDir', type: 'string', enum: ['asc', 'desc'] })
  orderDir?: 'asc' | 'desc' = 'asc';
}
