import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Subscription,
  debounceTime,
  every,
  fromEvent,
} from 'rxjs';
@Directive({
  selector: '[tbScrollX]',
  standalone: true,
})
export class ScrollDirectionDirective implements AfterViewInit {
  timeout: any;
  constructor(private readonly elementRef: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.onwheel = (event: WheelEvent) => {
      if (event.shiftKey) {
        return;
      }
      event.preventDefault();
      const options: ScrollToOptions = {
        left: event.deltaY,
        behavior: 'smooth',
      };
      this.elementRef.nativeElement.scrollBy(options);
    };
  }
}
