import { Component, Input } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { CombinedButtonComponent } from '../../button';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [MicroModule],
  template: `
    <button
      class="nav-list-item {{ color }} {{ variant }} {{ borderPosition }} "
      (click)="emit()"
      [attr.routerLink]="route ? route : undefined"
    >
      <span class="icon">{{ icon }}</span>
      <span>{{ label }}</span>
    </button>
  `,
})
export class NavListItemComponent extends CombinedButtonComponent {
  @Input() route?: string | string[];
}
