import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tb-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() label = '';
  @Input() active = false;
}
