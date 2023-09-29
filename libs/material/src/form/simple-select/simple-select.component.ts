import { Component } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { MultipleSelectInputComponent } from '../multiple-select-input/multiple-select-input.component';

@Component({
  selector: 'tb-simple-select',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown input-dropdown {{ direction }}  {{ color }}">
      <div class="input-container {{ color }} {{ variant }}">
        <label [for]="id()"></label>
        <span class="icon">{{ icon }}</span>
        <input
          #input
          [(ngModel)]="value"
          [id]="id()"
          type="text"
          autocomplete="off"
          (input)="inputHandler()"
          (keydown)="keydownHandler($event)"
        />
      </div>

      <div class="dropdown-items {{ distribution }}  w-full h-10em oy-auto ">
        <div
          class="list-item {{ color }}"
          *ngFor="let option of filteredOptions"
          (click)="selectOption(option)"
        >
          <span
            class="icon"
            *ngIf="option.icon"
            [class.accent]="option.selected"
            >{{ option.icon }}</span
          >
          <span> {{ option.label || option.value }}</span>
        </div>
      </div>
    </div>
  `,
})
export class SimpleSelectComponent extends MultipleSelectInputComponent {}
