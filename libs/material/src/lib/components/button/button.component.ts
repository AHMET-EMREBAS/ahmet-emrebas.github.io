import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './../__common/_-common.component';

@Component({
  selector: 'tb-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CommonComponent {}
