import { Component } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { ButtonComponent } from '../../button';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [MicroModule],
  templateUrl: './nav-list-item.component.html',
  styles: [],
})
export class NavListItemComponent extends ButtonComponent {}
