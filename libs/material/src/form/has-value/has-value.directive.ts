import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tbHasValue]',
  standalone: true,
})
export class HasValueDirective implements AfterViewInit {
  constructor(private readonly elementRef: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.addEventListener(
      'input',
      (event: InputEvent | any) => {
        const data = event.data;
        if (data?.length > 0) {
          this.markAsHasValue();
        } else {
          this.markAsHasNovalue();
        }
      }
    );
  }

  private markAsHasValue() {
    this.elementRef.nativeElement.setAttribute('has-value', 'true');
  }
  private markAsHasNovalue() {
    this.elementRef.nativeElement.setAttribute('has-value', 'false');
  }
}
