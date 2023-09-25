import { NgModule } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabDirective],
  imports: [TabContainerComponent, TabComponent],
  exports: [TabContainerComponent, TabDirective, TabComponent],
})
export class TabModule {}
