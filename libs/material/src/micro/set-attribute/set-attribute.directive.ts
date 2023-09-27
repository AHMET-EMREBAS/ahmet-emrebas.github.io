import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({ selector: '[tbSetAttribute]', standalone: true })
export class SetAttributeDirective implements AfterViewInit {
  @Input() tbSetAttribute?: Record<string, any>;
  constructor(public readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.tbSetAttribute) {
      const entries = Object.entries(this.tbSetAttribute);
      for (const [key, value] of entries) {
        if (key.startsWith('__')) {
          return;
        }
        this.elementRef.nativeElement.setAttribute(key, value);
      }
    }
  }
}
