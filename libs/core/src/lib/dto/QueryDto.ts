import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { FilterMetadata } from 'primeng/api';
import {
  Between,
  Equal,
  FindOptionsOrder,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
import { BooleanProperty, NumberProperty, StringProperty } from '../property';
import {
  DefaultBooleanTransformer,
  DefaultNumberTransformer,
} from '../transformers';

const QUERIES = {
  startsWith: (value: string) => ILike(`${value}%`),
  contains: (value: string) => ILike(`%${value}%`),
  notContains: (value: string) => Not(ILike(`%${value}%`)),
  endsWith: (value: string) => ILike(`%${value}`),
  equals: (value: string) => Equal(value),
  notEquals: (value: string) => Not(Equal(value)),
  in: (value: string[]) => In(value),
  lt: (value: number) => LessThan(value),
  lte: (value: number) => LessThanOrEqual(value),
  gt: (value: number) => MoreThan(value),
  gte: (value: number) => MoreThanOrEqual(value),
  between: (value: [string, string]) => {
    return Between(value[0], value[1]);
  },
  is: (value: any) => Equal(value),
  isNot: (value: any) => Not(Equal(value)),
  before: (value: Date) => LessThan(value),
  after: (value: Date) => MoreThan(value),
  dateIs: (value: Date) => Equal(value),
  dateIsNot: (value: Date) => Not(Equal(value)),
  dateBefore: (value: Date) => LessThan(value),
  dateAfter: (value: Date) => MoreThan(value),
};
export class QueryDto {
  @IsOptional()
  @Expose()
  @Transform(({ value }) => {
    if (!value) {
      return {};
    }

    let queryType: 'global' | 'local';
    let globalValue = '';

    const localQuery = {};
    const globalQuery = [];

    const filterObject = JSON.parse(value);

    if (filterObject.global) {
      queryType = 'global';
      globalValue = filterObject.global.value;
    } else {
      queryType = 'local';
    }

    const entries = Object.entries(filterObject);

    function writeLocal(key: string, value: any) {
      localQuery[key] = value;
    }

    function writeGlobal(key: string) {
      globalQuery.push({ [key]: QUERIES.contains(globalValue) });
    }

    for (const [key, value] of entries) {
      if (key === 'global') {
        continue;
      }

      for (const f of value as FilterMetadata[]) {
        if (queryType === 'local') {
          if (f.value && f.value !== 'undefined' && f.value !== 'null') {
            writeLocal(key, QUERIES[f.matchMode](f.value));
          }
          continue;
        } else {
          writeGlobal(key);
        }
      }
    }
    return queryType === 'local'
      ? localQuery
      : globalQuery.length > 0
      ? globalQuery
      : {};
  })
  where: any;

  @NumberProperty({ required: false, minimum: 1 })
  @DefaultNumberTransformer(20)
  take: number;

  @NumberProperty({ required: false, minimum: 0 })
  @DefaultNumberTransformer(0)
  skip: number;

  @BooleanProperty({ required: false, default: false })
  @DefaultBooleanTransformer(true)
  view: boolean;

  @BooleanProperty({ default: false })
  @DefaultBooleanTransformer(false)
  withDeleted: boolean;

  @StringProperty({
    required: false,
    enum: ['1', '-1', 'ASC', 'DESC', 'asc', 'desc'],
  })
  sortOrder?: string;

  @StringProperty({ required: false })
  sortField?: string;

  @StringProperty({
    required: false,
    enum: ['first', 'last'],
  })
  nullsOrder?: string;

  @Expose()
  @Transform(({ obj }) => {
    const field = obj.sortField || 'id';
    const sortDir = ['1', 'asc'].includes(obj.sortOrder.toLowerCase())
      ? 'ASC'
      : 'DESC';
    return {
      [field]: {
        direction: sortDir,
        nulls: obj.nullsOrder || 'last',
      },
    };
  })
  order: FindOptionsOrder<any>;
}
