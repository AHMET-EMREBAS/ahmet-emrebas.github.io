export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'warn'
  | 'red'
  | 'green'
  | 'black'
  | 'white';

export type ButtonType =
  | 'button'
  | 'icon-button'
  | 'combined-button'
  | 'tab-button';

export type ButttonVariant = 'basic' | 'raised' | 'flat' | 'stroked' | 'inbox' | 'tab';
export type ButtonSize = 'small' | 'regular' | 'big';
export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type InputVariant = ButttonVariant;

export type InputType = 'text' | 'number' | 'boolean' | 'date' | 'array';
