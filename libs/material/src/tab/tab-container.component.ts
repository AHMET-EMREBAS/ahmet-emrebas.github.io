import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { TabDirective } from './tab.directive';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { NavListModule } from './../nav-list/nav-list.component';
import { MicroModule } from './../micro/micro.module';
import { CombinedButtonComponent } from './../button';

export type TabContainerType = 'sidenav' | 'tab';
@Component({
  selector: 'tb-tab-container',
  standalone: true,
  imports: [MicroModule, NavListModule, CombinedButtonComponent],
  templateUrl: './tab-container.component.html',
  animations: [fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000 })],
})
export class TabContainerComponent implements AfterViewInit {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;
  @ContentChildren(TabDirective) children?: QueryList<TabDirective>;

  @Input() type: TabContainerType = 'tab';

  activeChild$ = new BehaviorSubject<TabDirective | undefined>(undefined);
  delayedChild$ = this.activeChild$.pipe(debounceTime(200));

  activateChild(child: TabDirective) {
    this.activeChild$.next(undefined);
    setTimeout(() => {
      this.activeChild$.next(child);
    }, 200);
  }

  scroll(event: WheelEvent) {
    event.preventDefault();
    this.container?.nativeElement.scrollBy({ left: event.deltaY });
  }

  ngAfterViewInit(): void {
    if (this.children?.first) {
      this.activateChild(this.children.first);
    }
  }
}
