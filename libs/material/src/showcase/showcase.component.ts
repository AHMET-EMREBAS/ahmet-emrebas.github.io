import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button';
import { MenuComponent } from '../menu/menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TabContainerComponent } from '../tab/tab-container/tab-container.component';
import { TabComponent } from '../tab/tab.component';
import { ButtonType, ButtonVariant, Color } from '../api';
import { BadgeDirective } from '../badge/badge.directive';

@Component({
  selector: 'tb-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MenuComponent,
    ToolbarComponent,
    TabContainerComponent,
    TabComponent,
    BadgeDirective,
  ],
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
  buttonColors = ['primary', 'secondary', 'accent', 'warn'] as Color[];

  buttonTypes = ['button', 'icon-button', 'combined-button'] as ButtonType[];

  buttonVariants = [
    'basic',
    'flat',
    'inbox',
    'raised',
    'stroked',
  ] as ButtonVariant[];

  handle(event: ButtonEvent) {
    console.log(event);
  }

  constructor() {}
}
