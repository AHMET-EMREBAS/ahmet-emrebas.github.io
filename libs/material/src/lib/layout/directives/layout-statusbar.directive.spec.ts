import { TemplateRef } from '@angular/core';
import { LayoutStatusbarDirective } from './layout-statusbar.directive';

describe('LayoutStatusbarDirective', () => {
  it('should create an instance', () => {
    const directive = new LayoutStatusbarDirective({} as any);
    expect(directive).toBeTruthy();
  });
});
