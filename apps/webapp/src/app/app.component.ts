import { Component } from '@angular/core';

@Component({
  selector: 'website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = $localize`Ahmet Emrebas `;
  title = $localize`webapp ${this.name} `;

  constructor() {}
}
