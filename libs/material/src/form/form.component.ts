import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
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
export class FormComponent implements AfterViewInit {
  @ContentChildren(FormActionsDirective) tbFormActions?: TemplateRef<any>;

  componentType = InputComponent;
  @ContentChildren(InputComponent) children?: QueryList<InputComponent>;

  @Output() submitEvent = new EventEmitter<Record<string, string>>();

  ngAfterViewInit(): void {}

  submit(event: any) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    const formValue = this.children
      ?.map((e) => ({ [e.name]: e.value }))
      .reduce((p, c) => ({ ...p, ...c }));

    this.submitEvent.emit(formValue);
  }
}

@NgModule({
  imports: [FormComponent, InputComponent, FormActionsDirective],
  exports: [FormComponent, InputComponent, FormActionsDirective],
})
export class FormModule {}
