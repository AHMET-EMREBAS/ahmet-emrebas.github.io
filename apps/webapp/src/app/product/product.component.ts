import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule, FormModule, MicroModule } from '@techbir/material';
import { ProductComponent, CategoryComponent } from '@techbir/forms';
@Component({
  standalone: true,

  imports: [ProductComponent],
  template: `<tb-product-form></tb-product-form> `,
})
export class AllFormsComponent {
  @Output() submitEvent = new EventEmitter();
  submit(event: any) {
    this.submitEvent.emit(event);
  }
}
