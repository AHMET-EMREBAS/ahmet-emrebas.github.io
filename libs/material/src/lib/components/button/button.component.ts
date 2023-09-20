import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../api';
import { CommonComponent } from '../common';

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CommonComponent {}
