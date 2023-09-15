import { Component } from '@angular/core';
import {
  ButtonDirective,
  FlatButtonDirective,
  IconButtonDirective,
  RaisedButtonDirective,
} from './buttons';

@Component({
  selector: 'techbir-sample-buttons',
  templateUrl: 'button.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    FlatButtonDirective,
    RaisedButtonDirective,
    IconButtonDirective,
  ],
})
export class SampleButtonsComponent {}
