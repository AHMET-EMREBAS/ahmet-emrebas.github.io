import { Component } from '@angular/core';

@Component({
  selector: 'techbir-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  colors = [
    'primary',
    'secondary',
    'accent',
    'warn',
    'red',
    'green',
    'black-lighter',
    'white',
  ].map((e) => {
    return {
      class: e,
    };
  });
}
