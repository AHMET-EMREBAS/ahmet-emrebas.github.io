import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Color, BadgePosition } from './../../api';

@Directive({ selector: '[tbBadge]', standalone: true })
export class BadgeDirective implements AfterViewInit {
  @Input() tbBadge? = '';
  @Input() tbBadgePosition?: BadgePosition = 'top-right';
  @Input() tbBadgeColor?: Color = 'primary';
  constructor(public readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.tbBadge) {
        this.elementRef.nativeElement.setAttribute('data-badge', this.tbBadge);
        this.elementRef.nativeElement.setAttribute(
          'data-badge-position',
          this.tbBadgePosition!
        );
        this.elementRef.nativeElement.setAttribute(
          'data-badge-color',
          this.tbBadgeColor!
        );
      }
    }, 200);
  }
}
