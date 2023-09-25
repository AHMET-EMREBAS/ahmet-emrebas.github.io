import { Component, ContentChildren, NgModule, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormActionsDirective } from './form-actions/form-actions.directive';

@Component({
  selector: 'tb-form',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './form.component.html',
  styles: [],
  providers: [InputComponent],
})
export class FormComponent {
  @ContentChildren(FormActionsDirective)
  actionTemplate?: QueryList<FormActionsDirective>;

  componentType = InputComponent;
  @ContentChildren(InputComponent) children?: QueryList<InputComponent>;
}

@NgModule({
  imports: [FormComponent, InputComponent, FormActionsDirective],
  exports: [FormComponent, InputComponent, FormActionsDirective],
})
export class FormModule {}
