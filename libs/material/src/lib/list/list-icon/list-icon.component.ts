import { Component, Input } from '@angular/core';

@Component({
  selector: 'techbir-list-icon',
  templateUrl: './list-icon.component.html',
  styleUrls: ['./list-icon.component.scss'],
})
export class ListIconComponent {
  @Input() icon = 'info';
}
