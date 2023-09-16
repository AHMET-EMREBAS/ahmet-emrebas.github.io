import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[techbirLayoutContent]',
})
export class LayoutContentDirective {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
