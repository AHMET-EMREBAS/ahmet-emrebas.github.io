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
  colorVariants = this.colors.map((e) => [
    e,
    ...['light', 'lighter', 'dark', 'darker'].map((v) => e + '-' + v),
  ]);
}
