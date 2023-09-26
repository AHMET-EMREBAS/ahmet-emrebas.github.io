import { Component } from '@angular/core';

import { ButtonComponent } from '../button';
import { TabModule } from '../tab/tab.module';

import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-app-inventory',
  standalone: true,
  imports: [MicroModule, TabModule, ButtonComponent],
  templateUrl: './app-inventory.component.html',
  styles: [],
})
export class AppInventoryComponent {}
