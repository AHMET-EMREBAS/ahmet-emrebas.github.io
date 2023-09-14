/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/component-class-suffix */
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorType } from '../api/color-type';
import { LoggerService } from '../api';

@Component({
  selector: `
  button[techbir-button], 
  a[techbir-button], 
  button[techbir-raised-button],
  a[techbir-raised-button],
   `,
  standalone: true,
  imports: [CommonModule],
  providers: [LoggerService],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() color: ColorType = 'primary';
  @Input() label = 'Button';

  constructor(
    private readonly ref: ElementRef<HTMLElement>,
    @Optional() private readonly logger: LoggerService
  ) {
    this.logger.setContext('ButtonComponent');
  }

  ngOnInit(): void {
    const tagname = this.ref.nativeElement.tagName;
    const validTagNames = ['a', 'button'];

    const isTagnameValid = validTagNames.includes(tagname);
    if (!isTagnameValid) {
      this.logger?.info('Info log');
      this.logger?.warn('Warn log');
      this.logger?.debug('Debug log');
      this.logger?.error(`Tag name should be ${validTagNames.join(' or ')}`);
    }
  }
}
