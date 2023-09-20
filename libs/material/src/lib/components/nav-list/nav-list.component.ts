import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHostComponent } from '../common';

@Component({
  selector: 'tb-nav-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent extends CommonHostComponent {}
