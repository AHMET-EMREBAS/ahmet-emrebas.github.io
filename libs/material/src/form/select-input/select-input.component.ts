import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';
import { OptionType } from '../enum-input/enum-input.component';

@Component({
  selector: 'tb-select-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown input-dropdown {{ direction }}  {{ color }}">
      <div class="input-container {{ color }} {{ variant }}">
        <span class="icon"> {{ icon }}</span>
        <label [for]="name">{{ label }} </label>
        <input
          #input
          [(ngModel)]="value"
          type="text"
          [id]="id()"
          [name]="name"
          [autocomplete]="autocomplete"
          (input)="emit()"
          tbHasValue
        />
      </div>
      <div class="dropdown-items {{ distribution }} w-full ">
        <div
          class="nav-list-item inline-input cursor-pointer {{ color }}"
          *ngFor="let option of options"
          (click)="setOption(option)"
        >
          <tb-icon [icon]="option.icon"></tb-icon>
          <span>{{ option.value }}</span>
          <div class="grow-1"></div>
          <span class="icon {{ color }}-face" *ngIf="value === option.value">
            check
          </span>
        </div>
      </div>
    </div>
  `,
})
export class SelectInputComponent extends CommonInputComponent {
  setOption(options: OptionType) {
    this.inputRef.nativeElement.value = options.value;
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
      this.inputRef.nativeElement.dispatchEvent(
        new InputEvent('input', {
          bubbles: true,
          cancelable: true,
          composed: true,
          data: options.value,
        })
      );
    });
  }
}
