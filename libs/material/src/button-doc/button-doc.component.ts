import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'tb-button-doc',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-doc.component.html',
  styles: [
    `
      pre {
        font-size: 0.7em;
      }
    `,
  ],
})
export class ButtonDocComponent {
  basicButton = `<tb-basic-button color='primary|secondary|accent|warn|red|green|black|white'></tb-basic-button>`;
  raisedButton = `<tb-raised-button color='primary|secondary|accent|warn|red|green|black|white'></tb-raised-button>`;
  flatButton = `<tb-flat-button color='primary|secondary|accent|warn|red|green|black|white'></tb-flat-button>`;
  strokedButton = `<tb-stroked-button color='primary|secondary|accent|warn|red|green|black|white'></tb-stroked-button>`;
}
