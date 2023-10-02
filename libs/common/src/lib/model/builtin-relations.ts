import { RelationOptions } from './model';

export function CategoryRelation(
  options?: Partial<RelationOptions>
): RelationOptions {
  return {
    type: 'ManyToOne',
    name: 'category',
    target: 'Category',
    eager: true,
    join: true,
    ...options,
  };
}

export function OwnerRelation(
  options: Pick<RelationOptions, 'name' | 'target'>
): RelationOptions {
  if (options?.name && options.target) {
    return {
      type: 'ManyToOne',
      onDelete: 'CASCADE',
      join: true,
      eager: true,
      ...options,
    };
  }
  throw new Error('target and name are requried!');
}

export function SubManyRelation(
  options: Pick<RelationOptions, 'name' | 'target'>
): RelationOptions {
  if (options?.name && options?.target) {
    return {
      type: 'ManyToMany',
      eager: true,
      join: true,
      ...options,
    };
  }
  throw new Error('Target and name are requried!');
}

export function SubOneRelation(
  options: Pick<RelationOptions, 'name' | 'target'>
): RelationOptions {
  if (options?.name && options?.target) {
    return {
      type: 'ManyToOne',
      eager: true,
      join: true,
      ...options,
    };
  }
  throw new Error('Target and name are requried!');
}
