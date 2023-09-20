import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../api';
import { CommonHostComponent } from '../common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'tb-menu',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends CommonHostComponent<MenuItem> {
  @Input() override data: MenuItem = {
    label: 'Menu',
    uname: 'menu',
    color: 'primary',
    icon: 'menu',
  };
}
