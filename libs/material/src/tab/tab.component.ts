/* eslint-disable @angular-eslint/directive-selector */
import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from './tab.directive';
import { Color } from '../api';
import { fadeInOnEnterAnimation } from 'angular-animations';
@Component({
  selector: 'tb-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  animations: [
    fadeInOnEnterAnimation({
      anchor: 'enter',
      duration: 2000,
    }),
  ],
})
export class TabComponent {
  @ContentChildren(TabDirective) content?: QueryList<TabDirective>;
  @Input() label = '';
  @Input() active = false;
  @Input() color?: Color;
}
