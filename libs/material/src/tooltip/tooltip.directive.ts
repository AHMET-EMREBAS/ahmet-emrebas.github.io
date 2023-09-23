import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { Position } from '../api';

@Directive({
  selector: '[tbTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewInit {
  @Input() tbTooltip = '';
  @Input() tbTooltipPosition: Position = 'bottom';
  constructor(private readonly elementRef?: ElementRef<HTMLButtonElement>) {}

  ngAfterViewInit(): void {
    if (!this.elementRef) return;

    const e = this.elementRef.nativeElement;
    e.setAttribute('aria-label', this.tbTooltip);
    e.setAttribute('tooltip-position', this.tbTooltipPosition);
  }
}
