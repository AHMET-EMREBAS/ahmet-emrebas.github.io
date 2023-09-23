import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Position } from '../api';

@Directive({
  selector: '[tbTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewInit {
  @Input() tbTooltip?: string = '';
  @Input() tbTooltipPosition?: Position = 'bottom';

  constructor(private readonly elementRef?: ElementRef<HTMLButtonElement>) {}

  ngAfterViewInit(): void {
    if (!this.elementRef) return;
    if (this.tbTooltip)
      if (this.tbTooltip?.trim().length > 0) {
        const e = this.elementRef.nativeElement;
        e.setAttribute('aria-label', this.tbTooltip);
        if (this.tbTooltipPosition)
          e.setAttribute('tooltip-position', this.tbTooltipPosition);
      }
  }
}
