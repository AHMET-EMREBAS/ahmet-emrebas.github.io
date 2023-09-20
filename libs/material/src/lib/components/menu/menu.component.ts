import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventObject, MenuItem } from '../../api';
import { CommonHostComponent } from '../common';

@Component({
  selector: 'tb-menu',
  standalone: true,
  imports: [CommonModule],
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
