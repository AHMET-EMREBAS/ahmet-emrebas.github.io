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

@Component({
  selector: 'tb-form',
  standalone: true,
  imports: [MicroModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  componentType = InputComponent;

  /** Form action container marked by FormActionDirective  */
  @ContentChildren(FormActionsDirective)
  actions?: QueryList<FormActionsDirective>;

  @ContentChildren(InputComponent) children!: QueryList<InputComponent>;

  @Output() submitEvent = new EventEmitter<Record<string, unknown>>();
  @Input() title = '';
  @Input() subtitle = '';
  @Input() name = 'form';

  readonly formValue: Record<string, unknown> = {};

  preventDefault(event: Event) {
    event.preventDefault();
  }

  childValue(value: InputComponent) {
    return value.inputs({ formName: this.name });
  }

  submit() {
    this.submitEvent.emit(this.formValue);
  }

  reset() {
    Object.keys(this.formValue).forEach((e) => delete this.formValue[e]);
  }
}
