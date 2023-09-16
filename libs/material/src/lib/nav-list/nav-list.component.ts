import { Component, Input } from '@angular/core';
type NavList = {
  path?: string;
  icon?: string;
  label: string;
  items?: NavList[];
};

@Component({
  selector: 'techbir-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Input() navlist!: NavList[];
}
