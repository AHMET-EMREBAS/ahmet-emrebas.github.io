import { Directive, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Directive({ selector: '[tbEventController]', standalone: true })
export class EvenetControllerDirective {
  private eventPool = new BehaviorSubject({});

  constructor(private readonly elementRef: ElementRef<any>) {}
}
