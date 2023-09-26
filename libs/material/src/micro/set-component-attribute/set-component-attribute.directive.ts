import { AfterViewInit, ComponentRef, Directive, Input } from '@angular/core';

@Directive({
  selector: '[tbSetComponentAttribute]',
  standalone: true,
})
export class SetComponentAttributeDirective  implements AfterViewInit{
  @Input() tbSetComponentAttribute?: Record<string, any>;

  constructor(public readonly componentRef: ComponentRef<unknown>) {}

  ngAfterViewInit(): void {
    if (this.tbSetComponentAttribute) {
      const attributes = Object.entries(this.tbSetComponentAttribute);
      for (const [key, value] of attributes) {
        this.componentRef.setInput(key, value);
      }
    }
  }
}
