import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[techbirLayoutToolbar]',
})
export class LayoutToolbarDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
