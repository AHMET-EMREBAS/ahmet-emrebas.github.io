import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ButtonModule,
  FormModule,
  MicroModule,
  CommonFormComponent,
} from '@techbir/material';
import { UserFormDto } from './user-form.dto';

@Component({
  standalone: true,
  imports: [MicroModule, FormModule, ButtonModule],
  selector: 'tb-user-form',
  template: `
    <div class="flex column gap-2em p-1em">
      <h1 class="title-2" substring="Safe form" i18n>Create User</h1>
      <tb-form (submitEvent)="submit($event)">
        <tb-input
          i18n-label
          inputType="text"
          name="username"
          label="Username"
          icon="person"
          autocomplete="off"
          required="true"
        ></tb-input>
        <tb-input
          i18n-label
          inputType="password"
          name="password"
          label="Password"
          icon="password"
          autocomplete="off"
          required="true"
        ></tb-input>
        <tb-input
          i18n-label
          inputType="boolean"
          name="isAdmin"
          label="undefined"
          icon="check_box_outline_blank"
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
              label="Save User"
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
export class UserFormComponent extends CommonFormComponent {
  constructor(route: ActivatedRoute) {
    super(UserFormDto, route);
  }
}
