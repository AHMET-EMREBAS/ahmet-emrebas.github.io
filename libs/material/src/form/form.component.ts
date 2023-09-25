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
  @ContentChildren(FormActionsDirective) tbFormActions?: TemplateRef<any>;

  componentType = InputComponent;
  @ContentChildren(InputComponent) children?: QueryList<InputComponent>;

  @Output() submitEvent = new EventEmitter<Record<string, string>>();

  @Input() formValue?: Record<string, any>;

  preventDefault(event: any) {
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
    if (this.formValue)
      Object.entries(this.formValue).forEach(([key, value]) => {
        delete (this.formValue as any)[key];
      });
  }
}

@NgModule({
  imports: [FormComponent, InputComponent, FormActionsDirective],
  exports: [FormComponent, InputComponent, FormActionsDirective],
})
export class FormModule {}
