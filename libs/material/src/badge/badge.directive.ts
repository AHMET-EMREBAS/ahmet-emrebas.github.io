import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Color } from '../api';

@Directive({
  selector: '[tbBadge]',
  standalone: true,
})
export class BadgeDirective implements AfterViewInit {
  @Input() tbBadge?: string;
  @Input() tbBadgePosition:
    | 'top-right'
    | 'top-left'
    | 'bottom-left'
    | 'bottom-right' = 'top-right';
  @Input() tbBadgeColor: Color = 'primary';
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.tbBadge) {
      this.elementRef.nativeElement.setAttribute('data-badge', this.tbBadge);
      this.elementRef.nativeElement.setAttribute(
        'data-badge-position',
        this.tbBadgePosition
      );
      this.elementRef.nativeElement.setAttribute(
        'data-badge-color',
        this.tbBadgeColor
      );
    }
  }
}
