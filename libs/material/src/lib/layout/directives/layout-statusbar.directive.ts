import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[techbirLayoutStatusbar]',
})
export class LayoutStatusbarDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
