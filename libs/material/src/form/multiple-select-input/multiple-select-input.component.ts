import { Component } from '@angular/core';
import { CommonInputComponent } from '../common-input/common-input.component';
import { MicroModule } from '../../micro/micro.module';
import { SelectOption } from '../../api';

@Component({
  selector: 'tb-multiple-select-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown input-dropdown {{ direction }}  {{ color }}">
      <div class="input-container {{ color }} {{ variant }}">
        <span class="icon"> {{ icon }}</span>
        <label [for]="id()">{{ label }} </label>
        <input
          #input
          [(ngModel)]="searchtext"
          type="text"
          [id]="id()"
          [attr.data-testid]="name"
          [name]="name"
          [autocomplete]="autocomplete"
          (input)="filterOptions()"
          tbHasValue
        />

        <!--TODO :  Add closeable chip here -->
        <span>{{ selectedItems() }}</span>
      </div>

      <div class="dropdown-items {{ distribution }} w-full h-10em oy-auto ">
        <div
          [attr.data-testid]="option.value"
          [id]="id() + option.value"
          class="nav-list-item inline-input cursor-pointer {{ color }}"
          *ngFor="let option of filterOptions()"
          (click)="selectOption(option)"
        >
          <tb-icon [icon]="option.icon"></tb-icon>
          <span>{{ option.value }}</span>
          <div class="grow-1"></div>
          <span class="icon {{ color }}-face" *ngIf="option.selected">
            check
          </span>
        </div>
      </div>
    </div>
  `,
})
export class MultipleSelectInputComponent extends CommonInputComponent<string> {
  searchtext = '';

  selectOption(option: SelectOption) {
    option.selected = !option.selected;
  }
  
  filterOptions(): SelectOption[] | undefined {
    return this.options?.filter((e) =>
      e.value.toLowerCase().includes(this.searchtext?.toLowerCase() || '')
    );
  }

  selectedItems() {
    return this.options?.filter((e) => e.selected);
  }
}
