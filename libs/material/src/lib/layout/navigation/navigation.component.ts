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
  LayoutToolbarDirective,
} from '../directives';

@Component({
  selector: 'techbir-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements AfterViewInit {
  @ContentChild(LayoutSidenavDirective) sidenav!: LayoutSidenavDirective;
  @ContentChild(LayoutToolbarDirective) toolbar!: LayoutSidenavDirective;
  @ContentChild(LayoutStatusbarDirective) statusbar!: LayoutSidenavDirective;
  @ContentChild(LayoutContentDirective) content!: LayoutContentDirective;
  isSidenavOpen = true;

  constructor(protected readonly cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    this.cd.detectChanges();
  }
}
