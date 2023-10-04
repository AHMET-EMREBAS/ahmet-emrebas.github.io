import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  CommonFormComponent,
} from '@techbir/material';
import { StoreFormDto } from './store-form.dto';

@Component({
  standalone: true,
  imports: [MicroModule, FormModule, ButtonModule],
  selector: 'tb-store-form',
  template: `
    <div class="flex column gap-2em p-1em">
      <h1 class="title-2" substring="Safe form" i18n>Create Store</h1>
      <tb-form (submitEvent)="submit($event)">
        <tb-input
          i18n-label
          inputType="text"
          name="name"
          label="Name"
          icon="info"
          autocomplete="off"
          required="true"
        ></tb-input>

        <div *tbFormActions>
          <div class="flex gap-2em">
            <tb-combined-button
              i18n-label
              nativeType="submit"
              variant="raised"
              color="primary"
              label="Save Store"
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
export class StoreFormComponent extends CommonFormComponent {
  constructor(route: ActivatedRoute) {
    super(StoreFormDto, route);
  }
}
