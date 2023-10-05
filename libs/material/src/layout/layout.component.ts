import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { NavListModule } from '../nav-list/nav-list.component';
import { ButtonModule } from '../button';
import { Title } from '@angular/platform-browser';
import { MicroModule } from '../micro/micro.module';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';
import { NavItem } from '../api';

@Component({
  selector: 'tb-layout',
  standalone: true,
  imports: [MicroModule, ToolbarComponent, NavListModule, ButtonModule],
  templateUrl: './layout.component.html',
  animations: [
    fadeInOnEnterAnimation({ anchor: 'enter', duration: 400 }),
    fadeOutOnLeaveAnimation({ anchor: 'leave', duration: 400 }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements AfterViewInit {
  leftOpen = true;
  rightOpen = false;
  isMobile?: boolean;

  leftPrimaryMenu: NavItem[] = [
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
  ];
  leftSecondaryMenu: NavItem[] = [
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
    { label: 'Left menu item', icon: 'info', route: ['route'] },
  ];

  rightPrimaryMenu: NavItem[] = [
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
  ];
  rightSecondaryMenu: NavItem[] = [
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
    { label: 'Right menu item', icon: 'task', route: ['route'] },
  ];

  constructor(public readonly title: Title) {}

  ngAfterViewInit(): void {
    const html = document.querySelector('html');
    console.log(html?.clientWidth);
    if (html && html.clientWidth < 500) {
      console.log('Is Mobile');
      this.isMobile = true;
      this.leftOpen = false;
      this.rightOpen = false;
    } else {
      console.log('Is Desktop');
      this.isMobile = false;
      this.leftOpen = true;
      this.rightOpen = false;
    }
  }
}
