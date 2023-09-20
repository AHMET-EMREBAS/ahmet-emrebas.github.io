import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../common';

@Component({
  selector: 'tb-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent extends CommonComponent {}
