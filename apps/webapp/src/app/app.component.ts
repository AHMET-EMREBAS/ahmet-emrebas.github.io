import { AfterViewInit, Component, isDevMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  name = $localize`Ahmet Emrebas `;
  title = $localize`webapp ${this.name} `;

  constructor(private readonly router: Router, private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    if (!isDevMode()) {
      if (navigator) {
        const userLocale = navigator.language;
        const locale = userLocale.split('-').shift()?.toLowerCase();

        if (locale) {
          const origin = window.location.origin;
          const pathName = window.location.pathname.slice(1).toLowerCase();

          console.table({
            pathName,
            locale,
            origin,
          });
          if (locale === pathName) {
            return;
          } else {
            window.location.href = `${origin}/${locale}`;
          }
        }
      }
    }
  }
}
