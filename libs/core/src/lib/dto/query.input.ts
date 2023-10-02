import { Input } from '../entities';
import { Field, Property } from '../property';
import { Expose, Transform } from 'class-transformer';

@Input({ isAbstract: true })
export class QueryInput {
  /**
   * Offset (paginated) where from entities should be taken.
   */

  @Field({ name: 'skip', type: 'number', minimum: 0, defaultValue: 0 })
  skip?: number;

  /**
   * Limit (paginated) - max number of entities should be taken.
   */
  @Field({
    name: 'take',
    type: 'number',
    maximum: 100,
    minimum: 0,
    defaultValue: 20,
  })
  take?: number;

  @Field({
    name: 'select',
    type: 'string',
    isArray: true,
    minLength: 1,
    maxLength: 30,
  })
  select?: string[];

  /**
   * Order, in which entities should be ordered.
   */
  @Field({ name: 'orderBy', type: 'string' })
  orderBy?: string;

  @Field({ name: 'orderDir', type: 'string' })
  orderDir?: 'ASC' | 'DESC' | '-1' | '1';

  @Expose()
  @Transform(({ obj }) => {
    console.log(obj, '<<<< Is Transfomering?');
    if (obj.orderBy && obj.orderDir) {
      return { [obj.orderBy]: obj.orderDir };
    } else {
      return undefined;
    }
  })
  order?: Record<string, string>;

  @Field({ name: 'withDeleted', type: 'boolean' })
  withDeleted?: boolean;

  @Field({ name: 'search', type: 'string' })
  search?: string;

  @Field({ name: 'before', type: 'string' })
  before?: string;

  @Field({ name: 'after', type: 'string' })
  after?: string;
}
