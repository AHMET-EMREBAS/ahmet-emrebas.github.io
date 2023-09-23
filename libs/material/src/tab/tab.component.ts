/* eslint-disable @angular-eslint/directive-selector */
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({ selector: 'tb-tab' })
export class TabDirective {
  constructor(public templateRef: TemplateRef<TabComponent>) {}
}
@Component({
  selector: 'tb-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styles: [],
})
export class TabComponent {
  @ContentChildren(TabDirective) content?: QueryList<TabDirective>;
  @Input() label = '';
  @Input() active = false;
}
