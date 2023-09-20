import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../common';

@Component({
  selector: 'tb-common-input',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class CommonInputComponent<T = any> extends CommonComponent {}
