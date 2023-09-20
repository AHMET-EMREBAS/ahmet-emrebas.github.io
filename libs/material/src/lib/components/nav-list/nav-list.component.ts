import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHostComponent } from '../common';
import { NavListItemComponent } from '../nav-list-item/nav-list-item.component';

@Component({
  selector: 'tb-nav-list',
  standalone: true,
  imports: [CommonModule, NavListItemComponent],
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent extends CommonHostComponent {}
