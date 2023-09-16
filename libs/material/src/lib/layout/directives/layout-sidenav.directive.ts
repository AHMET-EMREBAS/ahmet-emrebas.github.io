import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[techbirLayoutSidenav]'
})
export class LayoutSidenavDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
