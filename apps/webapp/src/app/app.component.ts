import { Component } from '@angular/core';

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  author = $localize`Ahmet Emrebas `;
  title = $localize`webapp built by ${this.author}`;
}
