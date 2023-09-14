/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorType } from '../api/color-type';

@Component({
  selector: `
  button[techbir-button], 
  a[techbir-button], 
  button[techbir-raised-button],
  a[techbir-raised-button],
   `,
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() color: ColorType = 'primary';
  @Input() label = 'Button';

  constructor(private readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.ref.nativeElement.classList.add(this.color);
  }
}
