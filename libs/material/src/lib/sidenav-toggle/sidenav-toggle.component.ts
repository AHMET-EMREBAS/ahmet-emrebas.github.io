import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Togglable } from '../api';

@Component({
  selector: 'techbir-sidenav-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './sidenav-toggle.component.html',
  styleUrls: ['./sidenav-toggle.component.scss'],
})
export class SidenavToggleComponent {
  @Input() sidenavRef!: Togglable;

  toggle() {
    this.sidenavRef.toggleValue = !this.sidenavRef.toggleValue;
  }

  isOpen() {
    return this.sidenavRef?.toggleValue;
  }
}
