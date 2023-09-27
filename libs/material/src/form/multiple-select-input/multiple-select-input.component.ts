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
          [(ngModel)]="value"
          type="text"
          [id]="id()"
          [attr.data-testid]="name"
          [name]="name"
          [autocomplete]="autocomplete"
          (input)="getOptions()"
          (keydown)="handleKeyDown($event)"
          tbHasValue
        />
      </div>
      <div class="selected-items">
        {{ selectedItems() }}
      </div>
      <div class="dropdown-items {{ distribution }} w-full h-10em oy-auto ">
        <div
          [attr.data-testid]="option.value"
          [id]="id() + option.value"
          class="nav-list-item inline-input cursor-pointer {{ color }}"
          *ngFor="let option of getOptions()"
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
  selectedItems() {
    return (
      this.options
        ?.filter((e) => e.selected)
        .map((e) => e.value)
        .join(',') || ''
    );
  }
  selectOption(option: SelectOption) {
    option.selected = !option.selected;
    this.inputRef.nativeElement.value = this.selectedItems() + ',';
    this.inputRef.nativeElement.dispatchEvent(
      new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        composed: true,
      })
    );
    this.inputRef.nativeElement.focus();
  }

  override emit(): void {
    this.inputEvent.emit(this.selectedItems());
  }
  handleInput() {
    const selectedItems = this.value!.split(',');
    const lastSelected = selectedItems!.pop()!;
  }
  searchText() {
    return this.value?.split(',').pop()?.toLowerCase() || '';
  }

  handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    if (event.key === 'Tab') {
      event.preventDefault();
      const option = this.getOptions()?.shift();
      if (option) {
        this.selectOption(option);
      }
    }

    if (event.key === 'Backspace') {
      event.preventDefault();
      const list = this.inputRef.nativeElement.value.split(',');
      const deletedItem = list.pop();
      const item = this.options?.find((e) => e.value === deletedItem);
      if (item) {
        item.selected = false;
      }
      this.inputRef.nativeElement.value = list.join(',');
    }
  }
  getOptions() {
    return this.options?.filter((e) => {
      return e.value.toLowerCase().includes(this.searchText()) && !e.selected
    });
  }
}
