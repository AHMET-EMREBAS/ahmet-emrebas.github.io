import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'tb-nav-list-item',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
})
export class NavListItemComponent extends CommonComponent {}
