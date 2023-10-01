import { InputType } from '@nestjs/graphql';
import { Property } from '../property';
import { FindOptionsWhere } from 'typeorm';
import { ILikeTransformer } from '../transformer';
import { Expose, Transform } from 'class-transformer';
// import { ParseBooleanTransformer, ParseIntTransformer } from '../transformers';

@InputType({ isAbstract: true })
export class QueryDto {
  /**
   * Offset (paginated) where from entities should be taken.
   */

  @Property({ name: 'skip', type: 'number', minimum: 0, defaultValue: 0 })
  skip?: number;

  /**
   * Limit (paginated) - max number of entities should be taken.
   */
  @Property({
    name: 'take',
    type: 'number',
    maximum: 100,
    minimum: 0,
    defaultValue: 20,
  })
  take?: number;

  @Property({
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
  @Property({ name: 'orderBy', type: 'string' })
  orderBy?: string;

  @Property({ name: 'orderDir', type: 'string' })
  orderDir?: 'ASC' | 'DESC' | '-1' | '1';

  @Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return { [obj.orderBy]: obj.orderDir };
    } else {
      return undefined;
    }
  })
  @Expose()
  order?: Record<string, string>;

  @Property({ name: 'withDeleted', type: 'boolean' })
  withDeleted?: boolean;

  @Property({ name: 'search', type: 'string' })
  search?: string;

  @Property({ name: 'before', type: 'string' })
  before?: string;

  @Property({ name: 'after', type: 'string' })
  after?: string;
}
