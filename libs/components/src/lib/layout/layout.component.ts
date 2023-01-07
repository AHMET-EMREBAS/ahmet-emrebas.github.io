import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() menubar: MenuItem[] = [
    { label: 'File' },
    { label: 'Edit' },
    { label: 'View' },
    { label: 'Help' },
  ];

  @Input() statusbar: MenuItem[] = [
    { icon: 'pi pi-cog' },
    { icon: 'pi pi-bell' },

    { icon: 'pi pi-phone' },
  ];

  @Input() leftMenu: MenuItem[] = [
    {
      label: 'Resources',
      items: [{ label: 'Product' }],
    },
    { separator: true },
    {
      label: 'Categories',
      items: [{ label: 'Category' }, { label: 'Department' }],
    },
  ];

  constructor() {}
}
