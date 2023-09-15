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
export class ButtonDirective extends AbstractButton {}

@Directive({
  selector: 'button[techbirRaisedButton], a[techbirRaisedButton]',
  standalone: true,
})
export class RaisedButtonDirective extends AbstractButton {}

@Directive({
  selector: 'button[techbirFlatButton], a[techbirFlatButton]',
  standalone: true,
})
export class FlatButtonDirective extends AbstractButton {}

@Directive({
  selector: 'button[techbirIconButton], a[techbirIconButton]',
  standalone: true,
})
export class IconButtonDirective extends AbstractButton {}
