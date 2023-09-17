import { Component, Input } from '@angular/core';

@Component({
  selector: 'techbir-list-label',
  templateUrl: './list-label.component.html',
  styleUrls: ['./list-label.component.scss'],
})
export class ListLabelComponent {
  @Input() label = 'Undefiend';
}
