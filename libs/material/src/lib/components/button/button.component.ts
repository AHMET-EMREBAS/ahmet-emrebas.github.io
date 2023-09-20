import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './../__common/_-common.component';
import { SharedModule } from '../../api';

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CommonComponent {}
