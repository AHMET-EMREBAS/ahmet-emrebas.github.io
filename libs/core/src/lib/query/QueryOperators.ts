import {
  Between,
  Equal,
  ILike,
  In,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';

/**
 * Type orm query operator helper
 */

export const QueryOperators = {
  startsWith: (value: string) => ILike(`${value}%`),
  contains: (value: string) => ILike(`%${value}%`),
  notContains: (value: string) => Not(ILike(`%${value}%`)),
  endsWith: (value: string) => ILike(`%${value}`),
  equals: (value: string) => Equal(value),
  notEquals: (value: string) => Not(Equal(value)),
  in: (value: string) => In(value.split(',')),
  lt: (value: number) => LessThan(value),
  lte: (value: number) => LessThanOrEqual(value),
  gt: (value: number) => MoreThan(value),
  gte: (value: number) => MoreThanOrEqual(value),
  between: (value: string) => {
    const [v, v1] = value.split(',');
    return Between(v, v1);
  },
  is: (value: string) => Equal(value),
  isNot: (value: string) => Not(Equal(value)),
  before: (value: string) => LessThan(value),
  after: (value: string) => MoreThan(value),
  dateIs: (value: string) => Equal(value),
  dateIsNot: (value: string) => Not(Equal(value)),
  dateBefore: (value: string) => LessThan(value),
  dateAfter: (value: string) => MoreThan(value),
};
