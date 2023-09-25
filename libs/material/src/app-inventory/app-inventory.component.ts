import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button';
import { TabModule } from '../tab/tab.module';

@Component({
  selector: 'tb-app-inventory',
  standalone: true,
  imports: [CommonModule, TabModule, ButtonComponent],
  templateUrl: './app-inventory.component.html',
  styles: [],
})
export class AppInventoryComponent {}
