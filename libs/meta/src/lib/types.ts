export type PropertyType = 'string' | 'number' | 'boolean' | 'Date' | 'object';

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
}

export class NumberProperty extends CommonProperty<number> {
  override readonly type = 'number';
  min?: number;
  max?: number;
}

export class BooleanProperty extends CommonProperty<boolean> {
  override readonly type = 'boolean';
}

export class DateProperty extends CommonProperty {
  override readonly type = 'Date';
}

export class ObjectProperty<ObjectType = string> extends CommonProperty<
  Record<string, any>
> {
  override readonly type = 'object';
  objectType?: ObjectType;
}

export type Property =
  | StringProperty
  | NumberProperty
  | BooleanProperty
  | DateProperty
  | ObjectProperty;

export type RelationType =
  | 'ManyToMany'
  | 'OneToMany'
  | 'OneToOne'
  | 'ManyToOne';

export type CascadeType =
  | boolean
  | ('insert' | 'update' | 'remove' | 'soft-remove' | 'recover')[];

export type OnDeleteUpdateType =
  | 'RESTRICT'
  | 'CASCADE'
  | 'SET NULL'
  | 'DEFAULT'
  | 'NO ACTION';

export class Relation extends Accassors {
  name!: string;
  target!: string;
  type!: RelationType;
  join?: true;
  eager?: true;
  required?: true;
  defaultValue?: any;
  cascade?: CascadeType;
  onDelete?: OnDeleteUpdateType;
  onUpdate?: OnDeleteUpdateType;
}

export class Model {
  name!: string;
  properties?: Record<string, Property>;
  relations?: Record<string, Relation>;
}
