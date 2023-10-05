import { Component, EventEmitter, Output } from '@angular/core';
import { TabModule } from '../tab/tab.module';
import { ButtonComponent } from '../button';
import { FormModule } from '../form/form.module';
import { MicroModule } from '../micro/micro.module';

@Component({
  selector: 'tb-app-auth',
  standalone: true,
  imports: [MicroModule, TabModule, FormModule, ButtonComponent],
  templateUrl: './app-auth.component.html',
})
export class AppAuthComponent {
  @Output() loginEvent = new EventEmitter();
  @Output() forgotPasswordEvent = new EventEmitter();
  @Output() secureEvent = new EventEmitter();
  @Output() signupEvent = new EventEmitter();

  submitLoginForm(formValue: Record<string, unknown>) {
    this.loginEvent.emit(formValue);
  }
  submitForgotForm(formValue: Record<string, unknown>) {
    this.forgotPasswordEvent.emit(formValue);
  }
  submitSecureForm(formValue: Record<string, unknown>) {
    this.secureEvent.emit(formValue);
  }
  submitSignupForm(formValue: Record<string, unknown>) {
    this.signupEvent.emit(formValue);
  }
}
