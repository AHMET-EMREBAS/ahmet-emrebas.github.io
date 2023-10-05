import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../api';

@Component({
  selector: 'tb-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toolbar {{ color }} w-100per">
      <ng-content></ng-content>
    </div>
  `,
  
})
export class ToolbarComponent {
  @Input() color: Color = 'primary';
}
