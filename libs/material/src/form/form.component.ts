import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MicroModule } from '../micro/micro.module';
import { FormValue } from '../api/form-value';

@Component({
  selector: 'tb-form',
  standalone: true,
  imports: [MicroModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() errors: Record<string, string> = {};

  componentType = InputComponent;

  /** Form action container marked by FormActionDirective  */
  @ContentChildren(FormActionsDirective)
  actions?: QueryList<FormActionsDirective>;

  @ContentChildren(InputComponent) children!: QueryList<InputComponent>;

  @Output() submitEvent = new EventEmitter<Record<string, unknown>>();
  @Input() title = '';
  @Input() subtitle = '';
  @Input() name = 'form';

  @Input() defaultValue?: any;
  

  readonly formValue = new FormValue();

  preventDefault(event: Event) {
    event.preventDefault();
  }

  childValue(value: InputComponent) {
    return value.inputs({
      formName: this.name,
      formValue: this.formValue,
      error: this.errors[value.name],
    });
  }

  submit() {
    this.submitEvent.emit(this.formValue.formValue());
  }

  reset() {
    this.formValue.reset();
  }
}
