import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tbFormActions]',
  standalone: true,
})
export class FormActionsDirective {
  constructor(public readonly templateRef: TemplateRef<unknown>) {}
}
