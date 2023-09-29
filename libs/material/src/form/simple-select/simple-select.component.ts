import { Component } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { SelectOption } from '../../api';
import { SelectInputComponent } from '../select-input/select-input.component';

@Component({
  selector: 'tb-simple-select',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown input-dropdown {{ direction }}  {{ color }} fit-content">
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
      <div
        class="dropdown-items {{
          distribution
        }} w-full  h-10em oy-auto ox-auto "
      >
        <div
          class="nav-list-item inline-input fit-content  cursor-pointer h-2em text-center {{
            color
          }}"
          [class.accent]="value === option.value"
          [attr.data-testid]="option.value"
          [id]="id() + option.value"
          *ngFor="let option of getOptions()"
          (click)="setOption(option)"
        >
          <span>{{ option.value }}</span>
          <div class="grow-1"></div>
        </div>
      </div>
    </div>
  `,
})
export class SimpleSelectComponent extends SelectInputComponent {
  override getOptions(): SelectOption[] | undefined {
    return this.options;
  }
}
