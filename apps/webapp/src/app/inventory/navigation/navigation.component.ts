import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as ResourceModules from '@techbir/forms';
import { Models } from '@techbir/meta';
@Component({
  selector: 'tb-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  open = false;
  routes = Object.values(ResourceModules)
    .filter((e) => e?.name?.endsWith('Module'))
    .map((e) => {
      const moduleName = e.name.replace('Module', '');
      const moduleMeta = Models.find(
        (e) => e.name.toLowerCase() === moduleName.toLowerCase()
      );
      return {
        label: moduleName,
        icon: moduleMeta?.icon || 'info',
        route: moduleName.toLowerCase(),
      };
    });

  constructor(public title: Title) {
    
  }
}
