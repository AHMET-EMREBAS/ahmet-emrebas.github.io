import { Component, Input } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [MicroModule],
  templateUrl: './nav-list-item.component.html',
})
export class NavListItemComponent {
  @Input() label?: string;
  @Input() icon?: string;
}
