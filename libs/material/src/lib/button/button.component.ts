import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Colors } from '../api';

@Directive({})
export class AbstractButton implements OnInit {
  @Input() color: Colors = 'primary';

  constructor(
    protected readonly ref: ElementRef<HTMLButtonElement | HTMLAnchorElement>
  ) {}
  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.color);
  }
}

@Directive({
  selector: 'button[techbirButton], a[techbirButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() techbirButton = 'primary';

  constructor(private readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.techbirButton);
  }
}

@Directive({
  selector: 'button[techbirRaisedButton], a[techbirRaisedButton]',
  standalone: true,
})
export class RaisedButtonDirective implements OnInit {
  @Input() techbirRaisedButton = 'primary';

  constructor(private readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.techbirRaisedButton);
  }
}

@Directive({
  selector: 'button[techbirFlatButton], a[techbirFlatButton]',
  standalone: true,
})
export class FlatButtonDirective implements OnInit {
  @Input() techbirFlatButton = 'primary';

  constructor(private readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.techbirFlatButton);
  }
}

@Directive({
  selector: 'button[techbirIconButton], a[techbirIconButton]',
  standalone: true,
})
export class IconButtonDirective implements OnInit {
  @Input() techbirIconButton = 'primary';

  constructor(private readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.techbirIconButton);
  }
}
