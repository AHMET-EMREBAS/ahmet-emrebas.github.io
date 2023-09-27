/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '../button.module';
import { MicroModule } from '../../micro/micro.module';
import { ButtonType, ButttonVariant, Color, Direction } from '../../api';

@Component({
  standalone: true,
  imports: [MicroModule, ButtonModule],
  template: `
    <div
      class="flex  gap-2em p-2em wrap justify-flex-start"
      *ngFor="let variant of variants"
    >
      <tb-button
        [label]="variant + ' ' + 'Button'"
        [variant]="variant"
        [color]="color"
        *ngFor="let color of colors"
      ></tb-button>
    </div>
    <div
      class="flex row gap-2em p-2em wrap justify-flex-start"
      *ngFor="let variant of variants"
    >
      <tb-icon-button
        icon="info"
        [variant]="variant"
        [color]="color"
        *ngFor="let color of colors"
      ></tb-icon-button>
    </div>
    <div
      class="flex row gap-2em p-2em wrap justify-flex-start"
      *ngFor="let variant of variants"
    >
      <tb-combined-button
        icon="info"
        [label]="variant + ' Combined'"
        [variant]="variant"
        [color]="color"
        *ngFor="let color of colors"
      ></tb-combined-button>
    </div>
    <div class="flex row gap-2em p-2em wrap justify-flex-start">
      <tb-button
        label="tab button {{ position }} "
        color="primary"
        variant="tab"
        [borderPosition]="position"
        *ngFor="let position of positions"
      ></tb-button>
    </div>
  `,
})
export class SampleButtonsComponent {
  buttons: any[] = [];

  buttonTypes: ButtonType[] = ['button', 'combined-button', 'icon-button'];
  positions: Direction[] = ['bottom', 'left', 'top', 'right'];

  variants: ButttonVariant[] = ['basic', 'flat', 'inbox', 'raised', 'stroked'];

  colors: Color[] = [
    'primary',
    'secondary',
    'accent',
    'warn',
    'red',
    'green',
    'white',
    'black',
  ];
}
