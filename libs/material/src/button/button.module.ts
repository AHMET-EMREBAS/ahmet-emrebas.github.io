import { NgModule } from '@angular/core';
import { ButtonComponent } from './button';
import { CombinedButtonComponent } from './combined-button';
import { IconButtonComponent } from './icon-button';

@NgModule({
  imports: [ButtonComponent, CombinedButtonComponent, IconButtonComponent],
  exports: [ButtonComponent, CombinedButtonComponent, IconButtonComponent],
})
export class ButtonModule {}
