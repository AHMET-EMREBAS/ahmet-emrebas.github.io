import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields } from '../shared/FormFields';

@Component({
  selector: 'ae-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() formFields!: FormFields;
}
