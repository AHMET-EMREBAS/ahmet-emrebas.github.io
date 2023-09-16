// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
} from '@angular/core';
import {
  LayoutContentDirective,
  LayoutSidenavDirective,
  LayoutStatusbarDirective,
} from '../directives';
import { Togglable } from '../../api';

@Component({
  selector: 'techbir-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements Togglable {
  @ContentChild(LayoutSidenavDirective) sidenav!: LayoutSidenavDirective;
  @ContentChild(LayoutStatusbarDirective) statusbar!: LayoutSidenavDirective;
  @ContentChild(LayoutContentDirective) content!: LayoutContentDirective;

  toggleValue = true;

  constructor(protected readonly cd: ChangeDetectorRef) {}
}
