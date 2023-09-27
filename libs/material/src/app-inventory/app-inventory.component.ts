import { Component } from '@angular/core';
import { ButtonComponent } from '../button';
import { TabModule } from '../tab/tab.module';
import { MicroModule } from '../micro/micro.module';
import { FormModule } from '../form/form.module';
import { NavListModule } from '../nav-list/nav-list.component';
@Component({
  selector: 'tb-app-inventory',
  standalone: true,
  imports: [MicroModule, TabModule, NavListModule, ButtonComponent, FormModule],
  templateUrl: './app-inventory.component.html',
})
export class AppInventoryComponent {}
