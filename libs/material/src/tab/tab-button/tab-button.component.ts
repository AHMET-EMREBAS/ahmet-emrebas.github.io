import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button';
import { ButtonType } from '../../api';

@Component({
  selector: 'tb-tab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-button.component.html',
  styles: [],
})
export class TabButtonComponent extends ButtonComponent {
  override readonly type: ButtonType = 'tab-button';
   
}
