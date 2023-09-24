import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

/**
 * Change scroll direction to x axis
 */
@Directive({
  selector: '[tbScrollX]',
  standalone: true,
})
export class ScrollDirectionDirective implements AfterViewInit, OnDestroy {
  subscription?: Subscription;

  constructor(private readonly elementRef: ElementRef<HTMLDivElement>) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.onwheel = (event) => {
      if (!event.shiftKey) {
        event.preventDefault();
      }
    };
    this.subscription = fromEvent<WheelEvent>(
      this.elementRef.nativeElement,
      'wheel'
    )
      .pipe(debounceTime(100))
      .subscribe((e) => {
        if (!e.shiftKey)
          this.elementRef.nativeElement.scrollBy({
            left: e.deltaY * 2,
            behavior: 'smooth',
          });
      });
  }
}
