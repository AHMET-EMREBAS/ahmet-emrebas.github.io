import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';
import { SelectOption } from '../../api';

@Component({
  selector: 'tb-select-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown input-dropdown {{ direction }}  {{ color }}">
      <div class="input-container {{ color }} {{ variant }}">
        <span class="icon"> {{ icon }}</span>
        <label [for]="id()">{{ label }} </label>
        <input
          #input
          [(ngModel)]="value"
          type="text"
          [id]="id()"
          [attr.data-testid]="name"
          [name]="name"
          [autocomplete]="autocomplete"
          (input)="getOptions()"
          (keydown)="handleKeyPress($event)"
          tbHasValue
        />
      </div>
      <div class="dropdown-items {{ distribution }} w-full h-10em oy-auto ">
        <div
          [attr.data-testid]="option.value"
          [id]="id() + option.value"
          class="nav-list-item inline-input cursor-pointer {{ color }}"
          *ngFor="let option of getOptions()"
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
  setOption(options: SelectOption) {
    this.inputRef.nativeElement.value = options.value;
    setTimeout(() => {
      this.inputRef.nativeElement.dispatchEvent(
        new InputEvent('input', {
          bubbles: true,
          cancelable: true,
          composed: true,
          data: options.value,
        })
      );

      this.emit();
    });
  }

  getOptions() {
    return this.options?.filter((e) =>
      e.value.toLowerCase().includes(this.value.toLowerCase())
    );
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const option = this.getOptions()?.pop();
      if (option) {
        this.setOption(option);
      }
    }
  }
}
