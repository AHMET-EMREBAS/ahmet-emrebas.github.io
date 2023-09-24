import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tbScrollX]',
  standalone: true,
})
export class ScrollDirectionDirective implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.elementRef.nativeElement.scrollBy({
        left: e.deltaY,
        behavior: 'smooth',
      });
    });
  }
}
