import { Component } from '@angular/core';

const hello = $localize`Hello`;

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = hello;
}
