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
import {
  BooleanProperty,
  NumberProperty,
  Property,
  StringProperty,
} from '../property';

import { InputType } from '@nestjs/graphql';

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
  is: (value: unknown) => Equal(value),
  isNot: (value: unknown) => Not(Equal(value)),
  before: (value: Date) => LessThan(value),
  after: (value: Date) => MoreThan(value),
  dateIs: (value: Date) => Equal(value),
  dateIsNot: (value: Date) => Not(Equal(value)),
  dateBefore: (value: Date) => LessThan(value),
  dateAfter: (value: Date) => MoreThan(value),
};

@InputType()
export class QueryDto<T> {
  @NumberProperty({ required: false, minimum: 1, default: 20 })
  take: number;

  @NumberProperty({ required: false, minimum: 0, default: 0 })
  skip: number;

  @BooleanProperty({ required: false, default: false })
  view: boolean;

  @BooleanProperty({ required: false, default: false })
  withDeleted: boolean;

  @StringProperty({
    required: false,
    enum: ['1', '-1', 'ASC', 'DESC', 'asc', 'desc'],
    default: 'id',
  })
  sortOrder?: string;

  @StringProperty({ required: false })
  sortField?: string;

  @StringProperty({
    required: false,
    enum: ['first', 'last'],
    default: 'last',
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
  order: FindOptionsOrder<T>;
}
