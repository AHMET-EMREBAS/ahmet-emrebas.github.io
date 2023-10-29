import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'tb-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  open = false;
  routes: { label: string; icon: string; route: string }[] = [];

  constructor(public title: Title) {}
}
