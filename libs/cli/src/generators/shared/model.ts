import { ApiPropertyOptions } from '@nestjs/swagger';
import { ColumnOptions, RelationOptions } from 'typeorm';

type ResourceNames =
  | 'Product'
  | 'Profile'
  | 'User'
  | 'Event'
  | 'Resource'
  | 'Operation'
  | 'Role'
  | 'Permission';

export class ModelProperty {
  type?: 'string' | 'number' | 'Date' | 'boolean';
  column?: ColumnOptions;
  validations?: ApiPropertyOptions;
}

export class ModelViewFieldOptions {
  type?: 'string' | 'number' | 'boolean' | 'Date';
}

export class ModelViewOptions {
  target?: ResourceNames;
  parent?: ResourceNames;
  viewFields?: Record<string, ModelViewFieldOptions>;
  condition?: string;
}

export class ModelRelation {
  type?: 'ManyToMany' | 'OneToMany' | 'ManyToOne' | 'OneToOne';
  target?: ResourceNames;
  join?: boolean;
  options?: RelationOptions;
}

export class Model {
  properties?: Record<string, ModelProperty>;
  relations?: Record<string, ModelRelation>;
  views?: ModelViewOptions[];
}
