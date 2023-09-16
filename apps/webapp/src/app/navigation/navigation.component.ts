import { Component } from '@angular/core';

type ListItem = {
  path?: string;
  icon?: string;
  label: string;
  items?: ListItem[];
};

@Component({
  selector: 'website-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navlist: ListItem[] = [
    {
      label: 'Main',
      items: [
        { path: '', label: 'Home', icon: 'home' },
        { path: 'sample', label: 'Sample', icon: 'info' },
      ],
    },
  ];
}
