import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Font =
  | 'tourney'
  | 'special-elite'
  | 'rubik-iso'
  | 'rubik-dirt'
  | 'roboto'
  | 'material-icon'
  | 'lobster'
  | 'josefin-sans'
  | 'dancing-script'
  | 'concert-one'
  | 'comfortaa'
  | 'black-ops-one'
  | 'handjet';

@Component({
  selector: 'tb-fonts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss'],
})
export class FontsComponent {
  /** Supporting fonts */
  @Input() font: Font = 'black-ops-one';
}
