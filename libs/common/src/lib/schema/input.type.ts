import { Autocomplete } from './autocomplete';

export type InputTypes =
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
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type InputType<T> = {
  attributes: Partial<
    HTMLInputElement & {
      type: InputTypes;
      autocomplete: Autocomplete;
      min: number;
      max: number;
    }
  >;
  prefix?: string;
  suffix?: string;
  map?: <R>(t: T) => R;
};
