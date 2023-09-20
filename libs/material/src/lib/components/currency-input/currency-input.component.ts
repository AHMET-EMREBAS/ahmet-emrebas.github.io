import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonInputComponent } from '../common/';
import { Icon } from '../../api';

@Component({
  selector: 'tb-currency-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent extends CommonInputComponent {
  override icon: Icon = 'attach_money';
}
