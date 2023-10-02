import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule, FormModule, MicroModule } from '@techbir/material';

@Component({
  standalone: true,
  imports: [MicroModule, FormModule, ButtonModule],
  selector: 'tb-product-form',
  template: `
    <div class="flex column gap-2em p-1em">
      <h1 class="title-2" substring="Safe form" i18n>Create Product</h1>
      <tb-form (submitEvent)="submit($event)">
        <tb-input
          i18n-label
          type="text"
          name="name"
          label="Name"
          icon="info"
          autocomplete="off"
          required="true"
        ></tb-input>
        <tb-input
          i18n-label
          type="textarea"
          name="description"
          label="Description"
          icon="description"
          autocomplete="off"
          required="undefined"
        ></tb-input>
        <tb-input
          i18n-label
          type="text"
          name="upc"
          label="Upc"
          icon="qr_code"
          autocomplete="off"
          required="undefined"
        ></tb-input>

        <div *tbFormActions>
          <div class="flex gap-2em">
            <tb-combined-button
              i18n-label
              nativeType="submit"
              variant="raised"
              color="primary"
              label="Save Product"
              icon="add"
            ></tb-combined-button>
            <tb-combined-button
              i18n-label
              nativeType="reset"
              variant="stroked"
              color="black"
              label="Reset"
              icon="refresh"
            ></tb-combined-button>
          </div>
        </div>
      </tb-form>
    </div>
  `,
})
export class ProductComponent {
  @Output() submitEvent = new EventEmitter();
  submit(event: any) {
    this.submitEvent.emit(event);
  }
}
