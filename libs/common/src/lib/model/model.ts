import { ClassConstructor } from '@techbir/utils';

export class PropertyTypeClass {
  readonly string = 'string';
  readonly number = 'number';

  readonly boolean = 'boolean';
  readonly Date = 'Date';
  readonly object = 'object';

  static isType(type: keyof PropertyTypeClass) {
    return new PropertyTypeClass()[type];
  }
}

export class RelationTypeClass {
  readonly ManyToMany = 'ManyToMany';
  readonly OneToMany = 'OneToMany';
  readonly OneToOne = 'OneToOne';
  readonly ManyToOne = 'ManyToOne';
  static isType(type: keyof RelationTypeClass) {
    return new RelationTypeClass()[type];
  }
}
export type RelationType = keyof RelationTypeClass;

export type PropertyType = keyof PropertyTypeClass;

export type TransformOptions = { object: any; value: any };
export type TransformFn = (options: TransformOptions) => any;

export class StringValidation {
  minLength?: number;
  maxLength?: number;
  format?: string;
}

export class NumberValidation {
  min?: number;
  max?: number;
  format?: string;
}

export class Accassors {
  private?: true;
  readonly?: true;
  static?: true;
}

export class CommonProperty<T = any> extends Accassors {
  type!: PropertyType;
  name!: string;
  required?: true;
  unique?: true;
  hash?: true;
  isArray?: true;
  transformers?: TransformFn[];
  defaultValue?: T;
}

export class StringProperty<
  StringFormat = string
> extends CommonProperty<string> {
  override readonly type = 'string';
  minLength?: number;
  maxLength?: number;
  format?: StringFormat;
  enum?: string[];
}

export class NumberProperty extends CommonProperty<number> {
  override readonly type = 'number';
  minimum?: number;
  maximum?: number;
}

export class BooleanProperty extends CommonProperty<boolean> {
  override readonly type = 'boolean';
}

export class DateProperty extends CommonProperty {
  override readonly type = 'Date';
}

export class ObjectProperty<
  ObjectType = ClassConstructor<any>
> extends CommonProperty<Record<string, any>> {
  override readonly type = 'object';
  objectType?: ObjectType;
}

export type PropertyOptions =
  | StringProperty
  | NumberProperty
  | BooleanProperty
  | DateProperty
  | ObjectProperty;

export type CascadeType =
  | boolean
  | ('insert' | 'update' | 'remove' | 'soft-remove' | 'recover')[];

export type OnDeleteUpdateType =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';

export class RelationOptions extends Accassors {
  name!: string;
  target!: any;
  type!: RelationType;
  join?: true;
  eager?: true;
  required?: true;
  defaultValue?: any;
  isArray?: true;
  cascade?: CascadeType;
  onDelete?: OnDeleteUpdateType;
  onUpdate?: OnDeleteUpdateType;
}

export class Model {
  name!: string;
  properties?: Record<string, PropertyOptions>;
  relations?: Record<string, RelationOptions>;
}
