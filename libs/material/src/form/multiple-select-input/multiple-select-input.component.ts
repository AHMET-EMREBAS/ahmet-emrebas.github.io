import { AfterViewInit, Component } from '@angular/core';
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
export class MultipleSelectInputComponent
  extends CommonInputComponent<SelectOption[]>
  implements AfterViewInit
{
  filteredOptions: SelectOption[] = [];

  ngAfterViewInit(): void {
    this.filteredOptions = [...(this.options || [])];
  }

  inputHandler() {
    const lastText = this.value?.split(',').pop()?.toLowerCase() || '';

    if (lastText?.length > 0) {
      this.filteredOptions = [
        ...(this.options?.filter((e) => {
          return e.value.toLowerCase().includes(lastText.toLowerCase());
        }) || []),
      ];
    } else {
      this.filteredOptions = this.options || [];
    }
    this.emit();
  }

  backspaceHandler(event: KeyboardEvent) {
    event.preventDefault();
    const values = this.value?.split(',');
    values?.splice(-1, 1);
    this.value = values?.join(',');

    this.options?.forEach((e) => {
      if (this.value?.includes(e.value)) {
        e.selected = true;
      } else {
        e.selected = false;
      }
    });
  }

  enterHandler(event: KeyboardEvent) {
    const option = this.filteredOptions[0];
    this.selectOption(option);
  }

  keydownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enterHandler(event);
    } else if (event.key === 'Backspace') {
      this.backspaceHandler(event);
    }
  }

  selectOption(option: SelectOption) {
    const found = this.options?.find((e) => e.value === option.value);
    if (found) {
      found.selected = !found.selected;
    }
    this.value =
      this.options
        ?.filter((e) => e.selected)
        .map((e) => e.value)
        .join(',') + ',';
    this.filteredOptions = [...(this.options || [])];
    this.emit();
  }

  override emit(): void {
    this.inputEvent.emit(this.options?.filter((e) => e.selected));
  }
}
