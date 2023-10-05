import { Component, Input } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { CombinedButtonComponent } from '../../button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [MicroModule, RouterModule],
  template: `
    <button
      class="nav-list-item {{ color }} {{ variant }} {{ borderPosition }} "
      (click)="emit()"
      [routerLink]="route ? route : undefined"
    >
      <span class="icon">{{ icon }}</span>
      <span>{{ label }}</span>
    </button>
  `,
})
export class NavListItemComponent extends CombinedButtonComponent {
  @Input() route?: string | string[];
}
