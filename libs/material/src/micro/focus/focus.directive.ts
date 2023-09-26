import { AfterViewInit, Directive, ElementRef } from '@angular/core';

/**
 * Focus element after view init.
 */
@Directive({
  selector: '[tbFocus]',
  standalone: true,
})
export class FocusDirective implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
