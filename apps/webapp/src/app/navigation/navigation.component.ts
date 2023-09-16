import { Component } from '@angular/core';

@Component({
  selector: 'website-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navitems: {
    path: string;
    icon: string;
    label: string;
  }[] = [
    { path: '', label: 'Home', icon: 'home' },
    { path: 'sample', label: 'Sample', icon: 'info' },
  ];
}
