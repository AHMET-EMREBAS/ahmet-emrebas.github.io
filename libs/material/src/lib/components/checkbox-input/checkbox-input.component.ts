import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from '../__common/_-common.component';

@Component({
  selector: 'tb-checkbox-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent extends CommonComponent {
  @Input() checked = false;
}
