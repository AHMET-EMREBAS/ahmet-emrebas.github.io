import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirectionDirective } from '../../scroll-direction/scroll-direction.directive';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { TabDirective } from '../tab.directive';
import { fadeInOnEnterAnimation } from 'angular-animations';
@Component({
  selector: 'tb-tab-container',
  standalone: true,
  imports: [CommonModule, ScrollDirectionDirective],
  templateUrl: './tab-container.component.html',
  animations: [fadeInOnEnterAnimation({ anchor: 'enter', duration: 1000 })],
})
export class TabContainerComponent implements AfterViewInit {
  @ViewChild('container') container?: ElementRef<HTMLDivElement>;
  @ContentChildren(TabDirective) children?: QueryList<TabDirective>;

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
