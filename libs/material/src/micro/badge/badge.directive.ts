import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Color, BadgePosition } from './../../api';

@Directive({
  selector: '[tbBadge]',
  standalone: true,
})
export class BadgeDirective implements AfterViewInit {
  @Input() tbBadge?: string;
  @Input() tbBadgePosition?: BadgePosition = 'top-right';
  @Input() tbBadgeColor?: Color = 'primary';
  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.tbBadge) {
      this.elementRef.nativeElement.setAttribute('data-badge', this.tbBadge);
      this.elementRef.nativeElement.setAttribute(
        'data-badge-position',
        this.tbBadgePosition || ''
      );
      this.elementRef.nativeElement.setAttribute(
        'data-badge-color',
        this.tbBadgeColor || ''
      );
    }
  }
}
