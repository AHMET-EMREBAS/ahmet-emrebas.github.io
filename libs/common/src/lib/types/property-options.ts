import { Constructor } from './constructor';
import { Group } from './group';
import { Icon } from './icons';
import { ModelNames } from './model-names';
import { PropertyNames } from './property-names';
import { StringFormat } from './string-format';

export type InputType =
  | 'likebutton'
  | 'textarea'
  | 'texteditor'
  | 'image'
  | 'video'
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'select';

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'object';

export type SelectOptionType = { id: number; value: any };

export type CommonOptions<T extends PropertyType, O = { type: T }> = {
  graphql?: true;
  propertyName?: PropertyNames;
  type: NonNullable<T>;
  defaultValue?: any;
  isArray?: boolean;
  dependsOn?: PropertyNames;
  description?: string;

  /**
   * Which form the field be listed,
   */
  groupName?: Group;
  inputType?: InputType;
  label?: string;
  icon?: Icon;
  order?: number;
  placeholder?: number;
  header?: string;
  nullable?: true;
  autocomplete?: HTMLInputElement['autocomplete'];
  selectOptions?: SelectOptionType[];
  enum?: string[];
  multiple?: boolean;
  isEqualToProperty?: PropertyNames;
  hash?: boolean;
} & O;

export type StringOptions = CommonOptions<
  'string',
  {
    stringFormat?: StringFormat;
    minLength?: number;
    maxLength?: number;
    unique?: boolean;
  }
>;

export type NumberOptions = CommonOptions<
  'number',
  {
    minimum?: number;
    maximum?: number;
  }
>;

export type IntegerOptions = CommonOptions<
  'integer',
  {
    minimum?: number;
    maximum?: number;
  }
>;

export type BooleanOptions = CommonOptions<'boolean'>;
export type DateOptions = CommonOptions<'date'>;
export type ObjectOptions<O = unknown> = CommonOptions<'object'> & {
  target: ModelNames | Constructor<O>;
};

export type PropertyOptions = Partial<
  | StringOptions
  | NumberOptions
  | IntegerOptions
  | BooleanOptions
  | DateOptions
  | ObjectOptions
> &
  CommonOptions<PropertyType>;

export type PropertyOptionsAll = Partial<
  Omit<StringOptions, 'type'> &
    Omit<NumberOptions, 'type'> &
    Omit<IntegerOptions, 'type'> &
    Omit<BooleanOptions, 'type'> &
    Omit<DateOptions, 'type'> &
    Omit<ObjectOptions, 'type'>
> &
  CommonOptions<PropertyType>;

export type PropertyInputOptionsAll = PropertyOptionsAll &
  Required<Pick<PropertyOptions, 'type' | 'propertyName' | 'label'>>;
