import { Component, ContentChildren, Input } from '@angular/core';
import { ButtonComponent } from '../button';
import { Position } from '../api';
import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-menu',
  standalone: true,
  imports: [MicroModule, ButtonComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent extends ButtonComponent {
  /** @ignore */
  readonly __componentType = MenuComponent;
  @ContentChildren(MenuComponent) children?: Record<string, any>[];


  @Input() openDirection: Position = 'bottom';
  @Input() containerView: 'row' | 'column' = 'column';
}
