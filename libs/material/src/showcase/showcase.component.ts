import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'tb-showcase',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MenuComponent],
  templateUrl: './showcase.component.html',
  styles: [
    `
      .container {
        min-height: 2000px;
      }
    `,
  ],
})
export class ShowcaseComponent {
  handle(event: ButtonEvent) {
    console.log(event);
  }
}
