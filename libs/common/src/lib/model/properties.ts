import { NumberProperty, RelationOptions, StringProperty } from './model';

export function UniqueNameProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
    ...options,
  };
}

export function DescriptionProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'description',
    type: 'string',
    minLength: 3,
    maxLength: 400,
    ...options,
  };
}

export function UpcProperty(options?: Partial<StringProperty>): StringProperty {
  return {
    name: 'upc',
    type: 'string',
    minLength: 11,
    maxLength: 13,
    ...options,
  };
}

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

export function PriceProperty(
  options?: Partial<NumberProperty>
): NumberProperty {
  return {
    name: 'price',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: Number.MAX_SAFE_INTEGER,
    ...options,
  };
}

export function OwnerRelation(
  options?: Partial<RelationOptions>
): RelationOptions {
  if (options?.name && options.target) {
    return {
      type: 'ManyToOne',
      onDelete: 'CASCADE',
      join: true,
      eager: true,
      name: options.name,
      target: options.target,
      ...options,
    };
  }
  throw new Error('target and name are requried!');
}
