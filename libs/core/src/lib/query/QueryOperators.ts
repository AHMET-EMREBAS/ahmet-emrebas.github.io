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
export const QueryOperators: Readonly<any> = {
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
