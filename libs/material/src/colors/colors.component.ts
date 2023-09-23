import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tb-colors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colors.component.html',
  styles: [],
})
export class ColorsComponent {
  /** @ignore */
  colors = [
    'primary',
    'secondary',
    'accent',
    'warn',
    'red',
    'green',
    'black',
    'white',
  ];

  /** @ignore */
  colorVariants = this.colors.map((e) => [
    e,
    ...[
      'light',
      'lighter',
      'dark',
      'darker',
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ].map((v) => e + '-' + v),
  ]);
}
