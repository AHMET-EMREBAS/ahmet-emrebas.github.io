import { AfterViewInit, Directive, ElementRef } from '@angular/core';

/**
 * If input has value then add "has-value" attribute to input element.
 */
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
        console.log('Input Event: ', event.data);
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
