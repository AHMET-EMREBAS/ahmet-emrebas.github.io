import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Colors {
  readonly primary = 'primary';
  readonly secondary = 'secondary';
  readonly accent = 'accent';
  readonly warn = 'warn';
  readonly red = 'red';
  readonly green = 'green';
  readonly black = 'black';
  readonly white = 'white';
}

export type ColorType = keyof Colors;

export const ColorList = Object.keys(new Colors()) as ColorType[];

export class Themes {
  readonly pastel = 'pastel';
  readonly vintage = 'vintage';
  readonly retro = 'retro';
  readonly neon = 'neon';
  readonly gold = 'gold';
  readonly light = 'light';
  readonly dark = 'dark';
  readonly warm = 'warm';
  readonly cold = 'cold';
  readonly summer = 'summer';
}

export type ThemeType =
  | 'pastel'
  | 'vintage'
  | 'retro'
  | 'neon'
  | 'gold'
  | 'light'
  | 'dark'
  | 'warm'
  | 'cold'
  | 'summer';

export const ThemeList = Object.keys(new Themes()) as ThemeType[];

@Component({
  selector: 'tb-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
  /** Select theme */
  @Input() theme: ThemeType = 'retro';

  /** @ignore */
  readonly colors = ColorList;
}
