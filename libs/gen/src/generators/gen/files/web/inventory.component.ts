import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  primaryMenuItems: MenuItem[] = [
    {
      label: 'Product',
      items: [
        { label: 'Product', routerLink: ['product'] },
        { label: 'Sku', routerLink: ['sku'] },
        { separator: true },
        { label: 'Category', routerLink: ['category'] },
        { label: 'Department', routerLink: ['department'] },
      ],
    },
    { separator: true },

    {
      label: 'Stock',
      items: [{ label: 'Quantity', routerLink: ['quantity'] }],
    },
    { separator: true },
    {
      label: 'Pricing',
      items: [
        { label: 'Price', routerLink: ['price'] },
        { label: 'Price Level', routerLink: ['pricelevel'] },
        { label: 'Promotion', routerLink: ['promotion'] },
      ],
    },
    { separator: true },
    {
      label: 'Sales',
      items: [
        { label: 'Transaction', routerLink: ['transaction'] },
        { label: 'Order', routerLink: ['order'] },
      ],
    },
    { separator: true },
    {
      label: 'Reports',
      items: [
        { label: 'Sale Report', routerLink: ['salereport'] },
        { label: 'Stock Analisis', routerLink: ['stockanalisis'] },
      ],
    },
  ];

  secondaryMenuItems: MenuItem[] = [
    { separator: true },
    {
      label: 'Store',
      items: [{ label: 'Store', routerLink: ['store'] }],
    },
    { separator: true },
    {
      label: 'Aministration',
      items: [
        { label: 'Employee', routerLink: ['user'] },
        { label: 'Customer', routerLink: ['customer'] },
      ],
    },
  ];

  menubarItems: MenuItem[] = [];
}
