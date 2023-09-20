import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from '../common';

@Component({
  selector: 'tb-switch-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss'],
})
export class SwitchInputComponent extends CommonInputComponent {}
