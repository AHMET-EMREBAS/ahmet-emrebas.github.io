/* eslint-disable @angular-eslint/directive-selector */
import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button';
import { MenuComponent } from '../menu/menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TabContainerComponent } from '../tab/tab-container/tab-container.component';
import { TabComponent } from '../tab/tab.component';
import { ButtonType, ButtonVariant, Color } from '../api';
import { BadgeDirective } from '../badge/badge.directive';

@Directive({
  selector: '[focusOnClick]',
  standalone: true,
})
export class FocusOnCLickDirective implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.setAttribute('tabindex', '0');
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.elementRef.nativeElement.focus();
    });
  }
}

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
    FocusOnCLickDirective,
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
