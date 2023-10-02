import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule, FormModule, MicroModule } from '@techbir/material';
import {
  ProductComponent,
  CategoryComponent,
  PriceLevelComponent,
  PriceComponent,
  MessageComponent,
} from '@techbir/forms';
@Component({
  standalone: true,

  imports: [
    ProductComponent,
    CategoryComponent,
    PriceLevelComponent,
    PriceComponent,
    MessageComponent,
  ],
  template: `
    <tb-product-form (submitEvent)="submit($event)"></tb-product-form>
    <tb-category-form (submitEvent)="submit($event)"></tb-category-form>
    <tb-price-level-form (submitEvent)="submit($event)"></tb-price-level-form>
    <tb-message-form (submitEvent)="submit($event)"></tb-message-form>
    <tb-price-form (submitEvent)="submit($event)"></tb-price-form>
  `,
})
export class AllFormsComponent {
  @Output() submitEvent = new EventEmitter();
  submit(event: any) {
    console.log(event);
    this.submitEvent.emit(event);
  }
}
