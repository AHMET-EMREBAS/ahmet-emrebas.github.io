import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonEvent } from '../button';
import { MenuComponent } from '../menu/menu.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TabContainerComponent } from '../tab/tab-container/tab-container.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tb-showcase',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MenuComponent,
    ToolbarComponent,
    TabContainerComponent,
    TabComponent,
  ],
  templateUrl: './showcase.component.html',
  styles: [
    `
      .container {
        min-height: 2000px;
      }
    `,
  ],
})
export class ShowcaseComponent {
  handle(event: ButtonEvent) {
    console.log(event);
  }
}
