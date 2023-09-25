import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tb-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
})
export class FormComponent {
  componentType = InputComponent;

  @ContentChildren(FormActionsDirective) tbFormActions?: TemplateRef<any>;
  @ContentChildren(InputComponent) children?: QueryList<InputComponent>;

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

@NgModule({
  imports: [FormComponent, InputComponent, FormActionsDirective],
  exports: [FormComponent, InputComponent, FormActionsDirective],
})
export class FormModule {}
