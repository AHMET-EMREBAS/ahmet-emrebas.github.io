import { Component, Input } from '@angular/core';
import { MicroModule } from '../../micro/micro.module';
import { CommonInputComponent } from '../common-input/common-input.component';
import { Icon } from '../../api';

export type OptionType = {
  icon: Icon;
  value: string;
};

@Component({
  selector: 'tb-enum-input',
  standalone: true,
  imports: [MicroModule],
  template: `
    <div class="dropdown bottom {{ color }}">
      <div class="input-container {{ color }}">
        <span class="icon"> {{ icon }}</span>
        <label [for]="name">{{ label }} </label>
        <input
          [(ngModel)]="value"
          [id]="name"
          type="text"
          [name]="name"
          [autocomplete]="autocomplete"
          (input)="emit()"
          tbHasValue
        />
      </div>
      <div class="dropdown-items column">
        <div *ngFor="let option of options">
          <div class="input-option flex gap-6">
            <tb-icon [icon]="option.icon"></tb-icon>
            <span>{{ option.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <!--       
        <div class="input-container {{ color }} {{ variant }}">
      <span class="icon"> {{ icon }}</span>
      <label [for]="name">{{ label }} </label>
      <input
        [(ngModel)]="value"
        [id]="name"
        type="text"
        [name]="name"
        [autocomplete]="autocomplete"
        (input)="emit()"
        tbHasValue
      />
      <div class="input-options">
        <div *ngFor="let option of options">
          <div  class="input-option flex gap-6">
            <tb-icon [icon]="option.icon"></tb-icon>
            <span>{{ option.value }}</span>
          </div>
        </div>
      </div>
      <span class="input-error" *ngIf="error">{{ error }}</span> -->
    <!-- </div> -->
  `,
})
export class EnumInputComponent extends CommonInputComponent {
  @Input() options?: OptionType[];
}
