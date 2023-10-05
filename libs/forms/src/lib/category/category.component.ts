import { Component } from '@angular/core';

@Component({
  selector: 'tb-category',
  template: `
    <tb-toolbar color="secondary">
      <tb-icon-button
        color="white"
        [routerLink]="['view']"
        icon="table"
      ></tb-icon-button>
      <tb-icon-button
        color="white"
        [routerLink]="['create']"
        icon="add"
      ></tb-icon-button>
    </tb-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class CategoryComponent {}
