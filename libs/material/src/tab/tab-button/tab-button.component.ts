import { Component, Input } from '@angular/core';
import { ButtonModule, CombinedButtonComponent } from '../../button';
import { MicroModule } from '../../micro/micro.module';
import { ButttonVariant, Direction } from '../../api';

@Component({
  selector: 'tb-tab-button',
  standalone: true,
  imports: [MicroModule, ButtonModule],
  template: `
    <ng-container
      *ngComponentOutlet="componentType; inputs: inputs()"
    ></ng-container>
  `,
})
export class TabButtonComponent extends CombinedButtonComponent {
  @Input() override variant?: ButttonVariant | undefined = 'tab';
  @Input() override borderPosition?: Direction | undefined = 'bottom';

  componentType = CombinedButtonComponent;

  inputs(): Record<string, any> {
    return this;
  }
}
