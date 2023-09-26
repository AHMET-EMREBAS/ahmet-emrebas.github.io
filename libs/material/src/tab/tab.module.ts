import { NgModule } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabContainerComponent } from './tab-container/tab-container.component';

@NgModule({
  declarations: [TabDirective],
  imports: [TabContainerComponent],
  exports: [TabContainerComponent, TabDirective],
})
export class TabModule {}
