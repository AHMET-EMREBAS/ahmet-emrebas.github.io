import { Icon } from './icon';

export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'warn'
  | 'red'
  | 'green'
  | 'black'
  | 'white';

export type SelectOption = {
  id?: string;
  icon?: Icon;
  label?: string;
  value: string;
  selected?: boolean;
};
export type ButtonType =
  | 'button'
  | 'icon-button'
  | 'combined-button'
  | 'tab-button';

export type ButttonVariant =
  | 'basic'
  | 'raised'
  | 'flat'
  | 'stroked'
  | 'inbox'
  | 'tab';
export type ButtonSize = 'small' | 'regular' | 'big';
export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type InputVariant = ButttonVariant;

export type InputType = 'text' | 'number' | 'boolean' | 'date' | 'select';

export type MonthNum = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
export type MonthNames =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export const ListOfMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type Day =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

export type DayNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const ListOfDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export type Hour =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
export type Minute =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59;
