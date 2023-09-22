/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector:
    'button[tb-basic-button],button[tb-raised-button],button[tb-stroked-button],button[tb-flat-button]',
  standalone: true,
  template: '<ng-content ></ng-content>',
})
export class ButtonComponent {}
