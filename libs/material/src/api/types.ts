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

export type ButtonStyle = 'basic' | 'raised' | 'flat' | 'stroked' | 'inbox';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type InputStyle = ButtonStyle;

export type InputType = 'text' | 'number' | 'boolean' | 'date' | 'array';
