import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ae-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {
  menubar: MenuItem[] = [];
  leftmenu: MenuItem[] = [
    {
      label: 'Inventory',
      items: [
        {
          label: 'Product',
          icon: 'pi pi-database',
          routerLink: ['product'],
        },
        {
          label: 'Quantity',
          icon: 'pi pi-star',
          routerLink: ['quantity'],
        },
      ],
    },
    {
      label: 'Categories',
      items: [
        {
          label: 'Category',
          icon: 'pi pi-database',
          routerLink: ['product'],
        },
        {
          label: 'Department',
          icon: 'pi pi-database',
          routerLink: ['product'],
        },
      ],
    },
    {
      label: 'Pricing',
      items: [
        {
          label: 'Price',
          routerLink: ['price'],
          icon: 'pi pi-dollar',
        },
        {
          label: 'Price level',
          routerLink: ['price-level'],
          icon: 'pi pi-dollar',
        },
        {
          label: 'Sales',
          routerLink: ['price-level'],
          icon: 'pi pi-dollar',
        },
      ],
    },
    {
      label: 'Store',
      items: [
        {
          label: 'Store',
          routerLink: ['Store'],
        },
      ],
    },
  ];
}
