import {
  Component,
  ContentChildren,
  EventEmitter,
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
})
export class FormComponent {
  componentType = InputComponent;

  /** Form action container marked by FormActionDirective  */
  @ContentChildren(FormActionsDirective)
  tbFormActions?: QueryList<FormActionsDirective>;

  @ContentChildren(InputComponent) children!: QueryList<InputComponent>;

  @Output() submitEvent = new EventEmitter<Record<string, unknown>>();

  readonly formValue: Record<string, unknown> = {};

  preventDefault(event: Event) {
    event.preventDefault();
  }

  childValue(value: any) {
    return {
      ...value,
      formValue: this.formValue,
    };
  }

  submit() {
    this.submitEvent.emit(this.formValue);
  }

  reset() {
    Object.keys(this.formValue).forEach((e) => delete this.formValue[e]);
  }
}
