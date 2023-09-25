import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tbFormActions]',
  standalone: true,
})
export class FormActionsDirective {
  constructor(public readonly elementRef: ElementRef<unknown>) {}

}
