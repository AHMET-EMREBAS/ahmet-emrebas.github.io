import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[aeValidateInput]',
})
export class ValidateInputDirective implements AfterViewInit {
  private readonly propertyName!: string;
  @Input() password!: boolean;

  constructor(private readonly ref: ElementRef<HTMLInputElement>) {
    this.propertyName = ref.nativeElement.name;
  }

  ngAfterViewInit(): void {
    this.ref.nativeElement.oninput = (e: any) => {
      this.password && this.verifyPassword(e.target);
    };

    this.ref.nativeElement.oninvalid = (e: any) => {
      this.password && this.verifyPassword(e.target);
    };
  }

  private verifyPassword(target: any) {
    const value = target.value;
    const lc = /[a-z]{1,}/;
    const uc = /[A-Z]{1,}/;
    const n = /[0-9]{1,}/;
    const c = /[~!@#$%^&*()_+{}:"<>?]{1,}/;

    this.setCustomValidity(target, '');

    if (!lc.test(value)) {
      this.setCustomValidity(target, 'Must contain a lowercase letter!');
      return;
    }
    if (!uc.test(value)) {
      this.setCustomValidity(target, 'Must contain an uppercase letter!');
      return;
    }
    if (!n.test(value)) {
      this.setCustomValidity(target, 'Must contain a number letter!');
      return;
    }
    if (!c.test(value)) {
      this.setCustomValidity(target, 'Must contain a special character!');
      return;
    }
  }

  private setCustomValidity(target: any, msg: string) {
    target.setCustomValidity(msg);
  }
}
