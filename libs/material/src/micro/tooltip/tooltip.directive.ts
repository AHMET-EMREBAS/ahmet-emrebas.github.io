import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';
import { Direction } from './../../api';

@Directive({
  selector: '[tbTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewChecked {
  @Input() tbTooltip?: string = '';
  @Input() tbTooltipPosition?: Direction = 'bottom';
  constructor(private readonly elementRef: ElementRef<HTMLButtonElement>) {}

  private setTooltip() {
    const e = this.elementRef.nativeElement;
    e.setAttribute('aria-label', this.tbTooltip || '');
    e.setAttribute('tooltip-position', this.tbTooltipPosition || 'bottom');
  }

  ngAfterViewChecked(): void {
    this.setTooltip();
  }
}
