import { Component, ContentChildren, Input } from '@angular/core';
import { ButtonModule, CombinedButtonComponent } from '../button';
import { Direction } from '../api';
import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-menu',
  standalone: true,
  imports: [MicroModule, ButtonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent extends CombinedButtonComponent {
  /** @ignore */
  readonly __componentType = MenuComponent;
  @ContentChildren(MenuComponent) children?: Record<string, any>[];

  @Input() openDirection: Direction = 'bottom';
  @Input() containerView: 'row' | 'column' = 'column';
}
