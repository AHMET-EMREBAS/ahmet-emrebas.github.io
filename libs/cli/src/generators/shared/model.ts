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

export interface ModelProperty {
  type: 'string' | 'number' | 'Date' | 'boolean';
  column: ColumnOptions;
  validations?: ApiPropertyOptions;
}

export interface ModelViewFieldOptions {
  type: 'string' | 'number' | 'boolean' | 'Date';
}

export interface ModelViewOptions {
  target: ResourceNames;
  parent: ResourceNames;
  viewFields?: Record<string, ModelViewFieldOptions>;
  condition?: string;
}

export interface ModelRelation {
  type: 'ManyToMany' | 'OneToMany' | 'ManyToOne' | 'OneToOne';
  target: ResourceNames;
  join?: boolean;
  options?: RelationOptions;
}

export interface Model {
  properties?: Record<string, ModelProperty>;
  relations?: Record<string, ModelRelation>;
  views?: ModelViewOptions[];
}
