export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'warn'
  | 'red'
  | 'green'
  | 'black'
  | 'white';

export type ButtonType = 'button' | 'icon-button' | 'combined-button';

export type ButtonVariant = 'basic' | 'raised' | 'flat' | 'stroked' | 'inbox';

export type Position = 'top' | 'right' | 'bottom' | 'left' | 'none';

export type InputVariant = ButtonVariant;

export type InputType = 'text' | 'number' | 'boolean' | 'date' | 'array';
